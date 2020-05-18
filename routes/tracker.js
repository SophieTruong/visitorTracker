const path = require('path');

const express = require('express');

const trackersController = require('../controllers/trackers');

const router = express.Router();

router.get('/all-trackers',trackersController.getTrackers);
//router.get('/preview/', trackersController.getTrackerPreview);

module.exports = router;
