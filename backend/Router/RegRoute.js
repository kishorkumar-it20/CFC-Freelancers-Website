const express = require('express');
const RegUser = require('../Schema/RegSchema');
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
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

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

router.post('/RegUser', async (req, res) => {
  const { Email, Password, ConfirmPassword, role } = req.body;

  try {
    if (Password !== ConfirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await RegUser.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    const hash = crypto.createHash('sha256');
    const hashedPassword = hash.update(Password).digest('hex');
    const regUser = new RegUser({ Email, Password: hashedPassword, role });

    await regUser.save();

    const token = generateToken(Email);
    const verificationLink = `http://localhost:8080/verify-email?token=${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: Email,
      subject: 'Verify Your Email Address',
      text: `Please click the following link to verify your email address: ${verificationLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending verification email:', error);
        return res.status(500).json({ error: "Error sending verification email" });
      } else {
        return res.status(200).json({ message: "User created successfully. Verification email sent." });
      }
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
});

router.get('/verify-email', async (req, res) => {
  const token = req.query.token;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;
    const user = await RegUser.findOne({ Email: email });

    if (!user) {
      return res.status(400).json({ error: "Invalid token or user does not exist" });
    }

    user.isVerified = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(400).json({ error: "Invalid or expired token" });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await RegUser.findOne({ Email: email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const hash = crypto.createHash('sha256');
    const hashedPassword = hash.update(password).digest('hex');

    if (hashedPassword !== user.Password) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    if (!user.isVerified) {
      return res.status(400).json({ error: "Email not verified" });
    }

    const token = generateToken(email);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        email: user.Email,
        role: user.role,
        name: user.name, 
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

router.get('/freelancers', async (req, res) => {
  try {
      const freelancers = await RegUser.find({ role: 'freelancer' }) // Fetch freelancers from MongoDB
      res.json(freelancers); // Send JSON response with freelancers array
  } catch (err) {
      res.status(500).json({ message: err.message }); // Handle error if any
  }
});

router.get('/clients', async (req, res) => {
  try {
      const clients = await RegUser.find({ role: 'client' }); 
      res.json(clients);
  } catch (err) {
      res.status(500).json({ message: err.message }); 
  }
});

router.get('/userdata', async (req, res) => {
  const email = req.query.email; // Extract from query parameters

  try {
      const user = await RegUser.findOne({ Email: email });
      if (!user) {
          return res.status(400).json({ error: 'User not found' });
      }
      res.json(user);
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching user data' });
  }
});


module.exports = router;
