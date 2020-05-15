const path = require('path');

const express = require('express');

const exhibitionsController = require('../controllers/exhibitions');

const router = express.Router();

router.get('/',exhibitionsController.getExhibition);

module.exports = router;
