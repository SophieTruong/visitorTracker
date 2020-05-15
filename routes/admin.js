const path = require('path');

const express = require('express');

//const rootDir = require('../utilities/path');
const AdminController = require('../controllers/admin')

const router = express.Router();

// /admin/add-space => GET
router.get('/add-space', AdminController.getAddSpace);

// /admin/add-space => POST
router.post('/add-space', AdminController.postAddSpace);

// /admin/add-exhibition=> GET
router.get('/add-exhibition', AdminController.getAddExhibition);

// /admin/add-exhibition => POST
router.post('/add-exhibition', AdminController.postAddExhibition);

// /admin/add-tracker=> GET
router.get('/add-tracker', AdminController.getAddTracker);

// /admin/add-tracker => POST
router.post('/add-tracker', AdminController.postAddTracker);

module.exports = router;
