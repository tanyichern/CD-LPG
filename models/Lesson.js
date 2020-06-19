const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const LessonSchema = new Schema({
  trainingType: {
    type: String,
    required: true,
  },
  conduct: {
    type: String,
    required: true,
  },
  tsr: {
    type: Array,
    required: true,
  },
  trainDirectives: {
    type: Array,
    required: true,
  },
  medDirectives: {
    type: Array,
    required: true,
  },
  opsInstrs: {
    type: Array,
    required: true,
  },
  vehicIndents: {
    type: Array,
    required: true,
  },
  ammo: {
    type: Array,
    required: true,
  },
});

module.exports = Lesson = mongoose.model('lesson', LessonSchema);
