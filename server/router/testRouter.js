const { findAll } = require('../controller/test');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

module.exports = router;
