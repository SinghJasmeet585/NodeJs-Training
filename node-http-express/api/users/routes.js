const express = require('express');

const router = express.Router();

const fs = require('fs');

const { users } = require('../../db.json');
const { v4: genUUID } = require('uuid');

// api/v1/users/
router.get('/', (req, res) => {
  res.status(200).send(users);
});

router.post('/', (req, res) => {
  console.log(req.body);
  users.push({ ...req.body, id: genUUID() });
  res.status(201).send(req.body);
});

// router.put();

// router.delete();

module.exports = router;
