const router = require('express').Router();
const User = require('../../../models/User');
const Note = require('../../../models/Note');
const mongoose = require('../../db');

//write your routes here
router.post('/users/register', (req, res) => {
  const { username, password, name } = req.body;
  User.exists({ userName: username })
    .then(response => {
      if (response) {
        res
          .status(201)
          .json({ userInfo: username, message: 'username is already exist' });
        res.end();
      } else {
        new User({
          _id: new mongoose.Types.ObjectId().toHexString(),
          name,
          userName: username,
          password: password,
        })
          .save()
          .then(() => {
            res.status(201);
            res.setHeader('Content-Type', 'application/json');
            res.json({ userInfo: username });
            res.end();
          })
          .catch(err => {
            res.setHeader('Content-Type', 'application/json');
            res.status(404).json({ userInfo: username, message: err.message });
          });
      }
    })
    .catch(() => {
      res.status(404);
      res.json({ userInfo: username, message: 'username is already exist' });
      res.end();
      return;
    });
});

router.post('/users/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ userName: username })
    .then(user => {
      if (user == null) {
        res.setHeader('Content-Type', 'application/json');
        res.json({ message: 'You are not registered user' });
        res.end();
      } else {
        user.compare(password).then(response => {
          if (!response) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: 'Password is incorrect' });
            res.end();
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.json({ user: { userName: username } });
            res.end();
          }
        });
      }
    })
    .catch(() => {});
});

router.post('/notes', (req, res) => {
  const { userId } = req.query;
  let { title, text } = req.body;
  new Note({
    _id: new mongoose.Types.ObjectId().toHexString(),
    title: title,
    text: text,
    userId: userId,
  })
    .save()
    .then(response => {
      res.setHeader('Content-Type', 'application/json');
      res.status(201).send(response);
      res.end();
    })
    .catch(() => {});
});

router.get('/notes/:noteId', (req, res) => {
  let { noteId } = req.params;
  Note.findById(noteId)
    .then(note => {
      res.setHeader('Content-Type', 'application/json');
      res.send(note);
    })
    .catch(() => {
      res.setHeader('Content-Type', 'application/json');
    });
});

router.put('/notes/:noteId', (req, resp) => {
  let { noteId } = req.params;
  Note.findOneAndUpdate(noteId, req.body, { new: true })
    .then(note => {
      resp.setHeader('Content-Type', 'application/json');
      resp.json(note);
    })
    .catch(() => {});
});

router.get('/notes', (req, res) => {
  const { userId } = req.query;
  Note.find({ userId })
    .then(note => {
      res.setHeader('Content-Type', 'application/json');
      res.json(note);
    })
    .catch(() => {
      res.status(404).send('resource not found');
    });
});

module.exports = router;
