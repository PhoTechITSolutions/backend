// models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' } // can be 'admin', 'superadmin', etc.
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
