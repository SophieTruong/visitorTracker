const Tracker = require('../models/tracker');
const Space = require('../models/space');
const Exhibition = require('../models/exhibition');


exports.getTrackers =  (req, res, next) => {
    Tracker.find()
    .then(trackers=>{
      res.render('all-trackers/tracker-list', {
        trks: trackers,
        pageTitle: 'All Trackers',
        path:'/all-trackers',
      });
    })
    .catch(err=>{
      console.log(err);
    })
};

const request = require('superagent');
exports.getTrackerPreview = (req, res, next) => {
    request
	.get('localhost:3000/tracker/api/')
	.send({ action: 'tracker-preview', id: 'string'})
	.set('Accept', 'application/json')
	.then(res => {
	    //we should return te page here
	    console.log('yay got ');
	    next()
	})
	.then(TrackerPreview=> {
	    res.render('all-trackers/tracker-preview', {
		pageTitle: 'Preview',
		path: '/all-trackers',
	    });
	})
		
  .catch(err=>{
    console.log(err);
  })
};
