const mongoose = require('mongoose')
const { Schema } = mongoose;
const GoogleUserSchema = new Schema ({
    googleId: {
        type: String,
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      avatar: {
        type: String,
      }
    });
const GoogleUser = mongoose.model('GoogleUser',GoogleUserSchema)
module.exports = GoogleUser