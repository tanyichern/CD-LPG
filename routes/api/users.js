const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

// user model
const User = require('../../models/User');

// @route   POST api/users
// @desc    register new user
// @access  public
router.post('/', (req, res) => {
  const { rank, name, email, password, unit, role } = req.body;

  // simple validation
  if (!rank || !name || !email || !password || !unit || !role) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // check for existing user
  User.findOne({ email: email }).then((user) => {
    if (user) return res.status(400).json({ msg: 'User already exists ' });

    const newUser = new User({
      rank,
      name,
      email,
      password,
      unit,
      role,
    });

    // create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              return res.json({
                token: token,
                user: _.pick(user, [
                  '_id',
                  'rank',
                  'name',
                  'email',
                  'unit',
                  'role',
                ]),
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
