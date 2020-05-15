/// allow admin actions: CRUD

const Space = require('../models/space');
const Exhibition = require('../models/exhibition');
const Tracker = require('../models/tracker'); 

exports.getAddSpace = (req, res, next) => {
    res.render('admin/add-space', {
      pageTitle: 'Add Space',
      path: '/admin/add-space',
    });
};

exports.postAddSpace = (req, res, next) => {
    const spaceName = req.body.spaceName;
    const spaceID = req.body.spaceID;
    const imageUrl = req.body.imageUrl;

    const space = new Space(spaceName,spaceID,imageUrl);
    space.save();
    res.redirect('/spaces/all-space');
};

exports.getAddExhibition = (req, res, next) => {
  res.render('admin/add-exhibition', {
    pageTitle: 'Add Exhibition',
    path: '/admin/add-exhibition',

  });
};

exports.postAddExhibition = (req, res, next) => {
  const name = req.body.name;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const exhibition = new Exhibition(name,startDate,endDate);
  //console.log(space);
  exhibition.save();
  res.redirect('/');
};

exports.getAddTracker = (req, res, next) => {
  res.render('admin/add-tracker', {
    pageTitle: 'Add Tracker',
    path: '/admin/add-tracker',

  });
};

exports.postAddTracker = (req, res, next) => {
  const name = req.body.name;
  const UUID = req.body.UUID;
  const tracker = new Tracker(name, UUID);
  //console.log(space);
  tracker.save();
  res.redirect('/trackers/all-trackers');
};
