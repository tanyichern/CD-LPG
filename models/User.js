const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema({
  rank: {
    type: String,
    required: true,
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
  password: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  lessons: {
    type: Object,
  },
  requests: {
    type: Object,
  },
  alerts: {
    type: Object,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
