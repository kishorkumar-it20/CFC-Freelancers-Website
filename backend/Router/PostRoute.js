const express = require('express');
const Task = require('../Schema/PostSchema');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.log('Error with transporter configuration:', error);
    } else {
        console.log('Transporter is configured correctly');
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/tasks', async (req, res) => {
    const { name, location, minBudget, maxBudget, skills, description, category, type, email } = req.body;

    const task = new Task({
        taskId: uuidv4(), // Generate a unique taskId
        name,
        category,
        location,
        minBudget,
        maxBudget,
        skills,
        description,
        type,
        email,
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Task Posted',
            text: `TaskId: ${newTask.taskId},
                    Name: ${name}, 
                    Minimum: ${minBudget}, 
                    Maximum: ${maxBudget}, 
                    Skills: ${skills}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/bids', async (req, res) => {
    const { taskId, bidderEmail, bidAmount, bidderName, bidderCountry } = req.body;
    console.log('Incoming bid data:', req.body); // Log incoming data

    try {
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        console.log('Task before saving bid:', task); // Log task before saving

        task.bids.push({ bidderEmail, bidAmount, bidderName, bidderCountry, createdAt: new Date() });
        await task.save();
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: bidderEmail,
            subject: 'Bid Has been Placed',
            text: `TaskId: ${taskId}, 
                    bidderEmail: ${bidderEmail},
                    bidAmount: ${bidAmount}, 
                    bidderName: ${bidderName}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        console.log('Task after saving bid:', task); // Log task after saving

        res.status(201).json(task.bids);
    } catch (err) {
        console.error('Error saving bid:', err);
        res.status(400).json({ message: err.message });
    }
});

router.get('/mybids', async (req, res) => {
    const { email } = req.query;
    try {
        const tasks = await Task.find({ 'bids.bidderEmail': email });
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching bids:', error);
        res.status(500).send('Server error');
    }
});

router.get('/tasks-with-bids', async (req, res) => {
    try {
        const tasks = await Task.find().populate('bids.bidderEmail');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/bids-offered', async (req, res) => {
    try {
        const tasks = await Task.find().populate('bids');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/accept-bid', async (req, res) => {
    const { bidderEmail } = req.body;

    try {
        const task = await Task.findOneAndUpdate(
            { "bids.bidderEmail": bidderEmail },
            { $set: { "bids.$.bidoffered": true } },
            { new: true }
        );

        if (!task) {
            return res.status(404).send({ message: 'Task or Bid not found' });
        }

        // Send an email to the bidder
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or any other email service you use
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: bidderEmail,
            subject: 'Bid Accepted',
            text: 'Congratulations! Your bid has been accepted.',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).send(task);
    } catch (error) {
        console.error('Error accepting bid:', error);
        res.status(500).send({ message: 'Server error' });
    }
});


module.exports = router;
