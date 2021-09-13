const express = require('express');
// Import from controller
const router = express.Router();

const fs = require('fs');

const { contacts } = require('../../db.json');
const { v4: genUUID } = require('uuid');

// api/v1/contacts/
router.get('/', (req, res) => {
  res.status(200).send(contacts);
});

router.post('/', (req, res) => {
  console.log(req.body);
  contacts.push({ ...req.body, id: genUUID() });
  res.status(201).send(req.body);
});

// router.put();

// router.delete();

module.exports = router;
