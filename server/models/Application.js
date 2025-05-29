const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  position: String,
  resume: String,
  cover: String,
  city: String,
  state: String,
  zipCode: String,
  presentJob: String,
  country: String,
  gender: String,
  dateOfBirth: String,
  poBox: String,
  verifiedEmail: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Application', applicationSchema);
