const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
// prettier-ignore
const UserSchema = new Schema({

  // for all users
  rank:             { type: String, required: true },
  name:             { type: String, required: true },
  email:            { type: String, required: true },
  password:         { type: String, required: true },
  unit:             { type: { _id: Schema.Types.ObjectId, name: String } },
  role:             { type: String, required: true },
  register_date:    { type: Date, default: Date.now },

  // instructors only
  lessons:          { type: [{ _id: Schema.Types.ObjectId }] },

  // SMEs only
  inRequests:       { type: [{ _id: Schema.Types.ObjectId }] },

  // instructors and SMEs
  alerts:           { type: [{
    class:          { type: String }, // request, fileUpdate, missingField
    text:           { type: String },
  }]}
});

module.exports = User = mongoose.model('user', UserSchema);
