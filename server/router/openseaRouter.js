const { listing } = require('../controller/openseaController');
const express = require('express');
const router = express.Router();

// http://localhost:3001/opesea/listing
router.post('/listing', listing);

module.exports = router;
