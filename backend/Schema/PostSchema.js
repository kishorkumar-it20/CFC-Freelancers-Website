const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const bidSchema = new mongoose.Schema({
    bidderEmail: String,
    bidAmount: Number,
    bidderName:String,
    bidderCountry:String,
    bidoffered: {type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now },
});

const postTaskSchema = new mongoose.Schema({
    taskId: { type: String, default: uuidv4 },
    email: String,
    name: String,
    category: String,
    location: String,
    minBudget: String,
    maxBudget: String,
    description: String,
    skills: [String],
    type: { type: String, default: 'fixed' },
    createdAt: { type: Date, default: Date.now },
    bids: [bidSchema],
});

module.exports = mongoose.model('PostTask', postTaskSchema);
