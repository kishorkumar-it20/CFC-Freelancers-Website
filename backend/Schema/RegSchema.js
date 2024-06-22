const mongoose = require('mongoose');
const bidSchema = new mongoose.Schema({
  bidderEmail: { type: String, required: true },
  bidAmount: { type: Number, required: true }
});
const RegSchema = new mongoose.Schema({
  Email: { type: String },
  Password: { type: String},
  isVerified: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ['freelancer', 'client'],
    
  },
    name: String,
    experience: String,
    education: String,
    skillset: [String],
    LinkedIn: String,
    GitHub: String,
    bio: String,
    country: String,
    about: String,
    services: String,
    organization: String,
    mobileNumber: String,
    companyDetails: String,
    qual: String,
    des: String,
    email: String,
    role: String,
    profilePic: String,
    bids: [bidSchema]
  },
{ timestamps: true });

const RegUser = mongoose.model('RegUser', RegSchema);
module.exports = RegUser;
