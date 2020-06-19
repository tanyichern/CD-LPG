const express = require('express');
const _ = require('lodash');

const router = express.Router();

// lesson model
const Lesson = require('../../models/Lesson');

// @route   POST api/lessons
// @desc    create a lesson
// @access public
router.post('/', (req, res) => {
  const newLesson = new Lesson({
    trainingType: req.body.trainingType,
    conduct: req.body.conduct,
    tsr: req.body.tsr,
    trainDirectives: req.body.trainDirectives,
    medDirectives: req.body.medDirectives,
    opsInstrs: req.body.opsInstrs,
    vehicIndents: req.body.vehicIndents,
    ammo: req.body.ammo,
  });

  newLesson.save().then((lesson) => res.json(lesson));
});

// @route   GET api/lessons
// @desc    get all lessons
// @access  public
router.get('/', (req, res) => {
  Lesson.find()
    .sort({ conduct: 1 })
    .then((lessons) => res.json(lessons));
});

// @route   GET api/lessons/:id
// @desc    get one lesson
// @access  public
router.get('/:id', (req, res) => {
  Lesson.findById(req.params.id).then((lesson) => res.json(lesson));
});

// @route   DELETE api/lessons/:id
// @desc    delete a lesson
// @access  public
router.delete('/:id', (req, res) => {
  Lesson.findById(req.params.id)
    .then((lesson) => lesson.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PATCH api/lessons/:id
// @desc    edit a lesson
// @access  public
router.patch('/:id', (req, res) => {
  Lesson.updateOne({ _id: req.params.id }, req.body)
    .then(res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
