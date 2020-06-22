const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
// prettier-ignore
const LessonSchema = new Schema({

  // schema for parent
  class:                { type: String, required: true }, // parent, child
  trainingType:         { type: String, required: true },
  conduct:              { type: String, required: true },
  regulations: {
    tsr:                { type: [{ _id: Schema.Types.ObjectId, name: String, link: String }] },
    trainDirectives:    { type: [{ _id: Schema.Types.ObjectId, name: String, link: String }] },
    medDirectives:      { type: [{ _id: Schema.Types.ObjectId, name: String, link: String }] },
    opsInstrs:          { type: [{ _id: Schema.Types.ObjectId, name: String, link: String }] },
  },
  logistics: {
    vehicIndents:       { type: [{ name: String, quantity: Number }] },
    ammo:               { type: [{ name: String, quantity: Number }] },
  },
  mostRecent: {
    course:             { type: String },
    unit:               { type: String },
    conductingOfficer:  { type: String },
  },
  children:             { type: [{ _id: Schema.Types.ObjectId }] },
  defaultfiles:         { type: [{ _id: Schema.Types.ObjectId, name: String }] },

  owner: {
    _id:                { type: Schema.Types.ObjectId },
    rank:               { type: String },
    name:               { type: String },
    unit:               { type: { _id: Schema.Types.ObjectId, name: String } },
    add_date:           { type: Date, default: Date.now },
  },

  // additional schema for child
  meta: {
    course:             { type: String },
    startDate:          { type: String },
    startTime:          { type: String },
    endDate:            { type: String },
    endTime:            { type: String },
    trainingArea:       { type: String },
    supervisingOfficer: { type: String },
    conductingOfficer:  { type: String },
    chiefSafetyOfficer: { type: String },
  },
  partA: {
    requests:           { type: [{
      _id:              { type: Schema.Types.ObjectId },
      issue:            { type: String },
      description:      { type: String },
      status:           { type: String },
      recipient:        { type: Schema.Types.ObjectId },
    }]},
    file: {
      _id:              { type: Schema.Types.ObjectId },
      name:             { type: String },
    },
  },
  partB: {
    requests:           { type: [{
      _id:              { type: Schema.Types.ObjectId },
      issue:            { type: String },
      description:      { type: String },
      status:           { type: String },
      recipient:        { type: Schema.Types.ObjectId },
    }]},
    file: {
      _id:              { type: Schema.Types.ObjectId },
      name:             { type: String },
    },
  },
  partC: {
    file: {
      _id:              { type: Schema.Types.ObjectId },
      name:             { type: String },
    },
  }
});

module.exports = Lesson = mongoose.model('lesson', LessonSchema);
