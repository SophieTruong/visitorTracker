const path = require('path');

const express = require('express');

const exhibitionsController = require('../controllers/exhibitions');

const router = express.Router();

router.get('/',exhibitionsController.getExhibition);

router.get('/:exhibitionId',exhibitionsController.getEx);



module.exports = router;
