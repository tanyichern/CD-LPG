const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
// prettier-ignore
const RequestSchema = new Schema({

  owner: {
    _id:            { type: Schema.Types.ObjectId },
    rank:           { type: String },
    name:           { type: String },
    unit:           { type: { _id: Schema.Types.ObjectId, name: String } },
    role:           { type: String },
  },

  lesson: {
    _id:            { type: Schema.Types.ObjectId },
    trainingType:   { type: String },
    conduct:        { type: String },
    course:         { type: String },
  },

  issue:            { type: String },
  description:      { type: String },
  status:           { type: String },

  recipient: {
    _id:            { type: Schema.Types.ObjectId },
    rank:           { type: String },
    email:          { type: String, required: true },
    unit:           { type: { _id: Schema.Types.ObjectId, name: String } },
    role:           { type: String },
  }
})

module.exports = Request = mongoose.model('request', RequestSchema);
