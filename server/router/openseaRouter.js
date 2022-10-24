const { listing,getData } = require('../controller/openseaController');
const express = require('express');
const router = express.Router();

// http://localhost:3001/opesea/listing
router.post('/listing', listing);

// http://localhost:3001/opesea/getData
router.get('/getData', getData);

module.exports = router;
