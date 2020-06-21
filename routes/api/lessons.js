const express = require('express');
const auth = require('../../middleware/auth');

const router = express.Router();

// lesson model
const Lesson = require('../../models/Lesson');

// @route   POST api/lessons
// @desc    create a lesson
// @access  private
router.post('/', (req, res) => {
  const newLesson = new Lesson({
    class: req.body.class,
    trainingType: req.body.trainingType,
    conduct: req.body.conduct,
    regulations: req.body.regulations,
    logistics: req.body.logistics,
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
  Lesson.findById(req.params.id).then((lesson) => {
    if (lesson) return res.json(lesson);
    return res.status(404).json({ msg: 'Lesson not found' });
  });
});

// @route   DELETE api/lessons/:id
// @desc    delete a lesson
// @access  private
router.delete('/:id', (req, res) => {
  Lesson.findById(req.params.id)
    .then((lesson) => lesson.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PATCH api/lessons/:id
// @desc    edit a lesson
// @access  private
router.patch('/:id', (req, res) => {
  Lesson.updateOne({ _id: req.params.id }, req.body)
    .then(res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
