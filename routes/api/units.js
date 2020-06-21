const express = require('express');

const router = express.Router();

// unit model
const Unit = require('../../models/Unit');

// @route   POST api/units
// @desc    create a unit
// @access  private
router.post('/', (req, res) => {
  const { name } = req.body;

  // simple validation
  if (!name) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // check for existing unit
  Unit.findOne({ name: name }).then((unit) => {
    if (unit) return res.status(400).json({ msg: 'Unit already exists' });

    const newUnit = new Unit({
      name: name,
      dbname: name.split(' ').join('').toLowerCase(),
    });

    newUnit.save().then((unit) => res.json(unit));
  });
});

// @route   GET api/units
// @desc    get all units
// @access  public
router.get('/', (req, res) => {
  Unit.find()
    .sort({ dbname: 1 })
    .then((units) => res.json(units));
});

// @route   GET api/units/:name
// @desc    get one unit
// @access  public
router.get('/:name', (req, res) => {
  Unit.findOne({ dbname: req.params.name }).then((unit) => {
    if (unit) return res.json(unit);
    return res.status(404).json({ msg: 'Unit not found' });
  });
});

// @route   DELETE api/units/:name
// @desc    delete a unit
// @access  private
router.delete('/:name', (req, res) => {
  Unit.findOne({ dbname: req.params.name })
    .then((unit) => unit.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PATCH api/units/:name
// @desc    edit a unit
// @access  private
router.patch('/:name', (req, res) => {
  req.body.dbname = req.body.name.split(' ').join('').toLowerCase();
  Unit.updateOne({ dbname: req.params.name }, req.body)
    .then(res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
