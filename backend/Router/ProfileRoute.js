const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
const RegUser = require('../Schema/RegSchema');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 9000000 }, // Set file size limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

router.post('/profileCompletion', upload.single('profilePic'), async (req, res) => {
  const {
    email,
    name,
    organization,
    mobileNumber,
    country,
    bio,
    companyDetails,
    about,
    qual,
    services,
    skillset,
    LinkedIn,
    des,
    education,
    GitHub,
  } = req.body;

  try {
    const user = await RegUser.findOne({ Email: email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Store previous profile picture path
    const previousProfilePic = user.profilePic;

    // Update user details
    user.name = name;
    user.organization = organization;
    user.mobileNumber = mobileNumber;
    user.country = country;
    user.bio = bio;
    user.companyDetails = companyDetails;
    user.about = about;
    user.qual = qual;
    user.services = services;
    user.skillset = skillset;
    user.LinkedIn = LinkedIn;
    user.des = des;
    user.education = education;
    user.GitHub = GitHub;

    // Update profile picture if a new one is uploaded
    if (req.file) {
      user.profilePic = req.file.path;
    }

    await user.save();

    // Delete the old profile picture if a new one has been uploaded
    if (req.file && previousProfilePic && previousProfilePic !== user.profilePic) {
      await unlinkAsync(previousProfilePic);
    }

    res.status(200).json({ message: 'Profile completed successfully', user });
  } catch (error) {
    console.error('Error completing profile:', error);
    res.status(500).json({ error: 'An error occurred while completing profile' });
  }
});

module.exports = router;