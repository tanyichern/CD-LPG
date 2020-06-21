const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
// prettier-ignore
const UnitSchema = new Schema({

  name:             { type: String, required: true },

  users:            { type: [{
    _id:            { type: Schema.Types.ObjectId },
    rank:           { type: String },
    name:           { type: String },
    role:           { type: String },
  }]},

  lessons:          { type: [{
    _id:            { type: Schema.Types.ObjectId },
    trainingType:   { type: String },
    conduct:        { type: String },
    rank:           { type: String },
    name:           { type: String },
    course:         { type: String },
  }]}
})

module.exports = Unit = mongoose.model('unit', UnitSchema);
