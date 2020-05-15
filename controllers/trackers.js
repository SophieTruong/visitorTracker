const Tracker = require('../models/tracker');

exports.getTrackers =  (req, res, next) => {
    Tracker.fetchAll(trackers=>{
      res.render('all-trackers/tracker-list', {
        trks: trackers,
        pageTitle: 'All Trackers',
        path:'/all-trackers',

      });  
    });
};

exports.getTracker = (req, res, next) => {
  const id = req.params.trackerId;
  Tracker.findbyId(id,tracker =>{
    console.log(tracker);
  });
  res.redirect('/trackers/all-trackers');
}

