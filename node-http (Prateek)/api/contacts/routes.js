const fs = require('fs');

const router = require('express').Router();
const { v4: uuid } = require('uuid');
const { contacts } = require('../../db.json');

router.get('/', require('./controller').getContacts);

router.post('/', (req, res) => {
  contacts.push({
    id: uuid(),
    ...req.body,
  });

  return res.status(201).json({ ok: true, contacts });
});

module.exports = router;
