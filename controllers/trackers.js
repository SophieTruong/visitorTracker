const Tracker = require('../models/tracker');

exports.getTrackers =  (req, res, next) => {
    Tracker.fetchAll()
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