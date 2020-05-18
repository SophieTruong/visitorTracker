const path = require('path');

const express = require('express');

//const rootDir = require('../utilities/path');
const AdminController = require('../controllers/admin')

const router = express.Router();

/* ..... SPACE .....*/
// /admin/add-space => GET
router.get('/add-space', AdminController.getAddSpace);

// /admin/add-space => POST
router.post('/add-space', AdminController.postAddSpace);

// /admin/edit-space => GET
router.get('/edit-space/:spaceID', AdminController.getEditSpace);

router.post('/edit-space/',AdminController.postEditSpace);

// /admin/delete-space => POST
router.post('/delete-space/',AdminController.postDeleteSpace);

/* ..... EXHIBITION .....*/

// /admin/add-exhibition=> GET
router.get('/add-exhibition', AdminController.getAddExhibition);

// /admin/add-exhibition => POST
router.post('/add-exhibition', AdminController.postAddExhibition);

// /admin/edit-exhibition => GET
router.get('/edit-exhibition/:exhibitionID', AdminController.getEditExhibition);

// /admin/edit-exhibition => POST
router.post('/edit-exhibition/:exhibitionID',AdminController.postEditExhibition);

// /admin/delete-exhibition => POST
router.post('/delete-exhibition/',AdminController.postDeleteExhibition);

/* ..... TRACKER .....*/


// /admin/add-tracker=> GET
router.get('/add-tracker', AdminController.getAddTracker);

// /admin/add-tracker => POST
router.post('/add-tracker', AdminController.postAddTracker);

// /admin/edit-exhibition => GET
router.get('/edit-tracker/:trackerID', AdminController.getEditTracker);

// /admin/edit-tracker => POST
router.post('/edit-tracker/:trackerID', AdminController.postEditTracker);

// /admin/delete-tracker => POST
router.post('/delete-tracker/',AdminController.postDeleteTracker);

module.exports = router;
