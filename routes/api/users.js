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
  const username = name.split(' ').join('').toLowerCase();

  // simple validation
  if (!rank || !name || !username || !email || !password || !unit || !role) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // check for existing user
  User.findOne({ email: email }).then((user) => {
    if (user) return res.status(400).json({ msg: 'User already exists ' });

    const newUser = new User({
      rank,
      name,
      username,
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
                  'username',
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

// @route   GET api/users/:role
// @desc    get all users according to role
// @access  private
router.get('/:role', (req, res) => {
  User.find({ role: req.params.role })
    .sort({ username: 1 })
    .then((users) => {
      const cleanUsers = _.map(users, (user) => {
        return _.pick(user, [
          '_id',
          'rank',
          'name',
          'username',
          'email',
          'unit',
          'role',
        ]);
      });
      return res.json(cleanUsers);
    });
});

// @route   GET api/users/:role/:username
// @desc    get one user
// @access  private
router.get('/:role/:username', (req, res) => {
  User.findOne({ username: req.params.username, role: req.params.role }).then(
    (user) => {
      if (user) return res.json(user);
      return res.status(404).json({ msg: 'User not found' });
    }
  );
});

// @route   DELETE api/users/:role/:username
// @desc    delete a unit
// @access  private
router.delete('/:role/:username', (req, res) => {
  console.log(req.params);
  User.findOne({ username: req.params.username, role: req.params.role })
    .then((user) =>
      user.remove().then(() => res.json({ _id: user._id, success: true }))
    )
    .catch((err) => res.status(404).json({ msg: 'Cannot delete user' }));
});

module.exports = router;
