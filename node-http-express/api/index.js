const router = require('express').Router();

router.use('/contacts', require('./contacts'));
router.use('/users', require('./users'));

module.exports = router;
