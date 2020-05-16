const Space = require('../models/space');

exports.getSpaces =  (req, res, next) => {
    Space.fetchAll(spaces=>{
      res.render('all-spaces/space-list', {
        spcs: spaces,
        pageTitle: 'All spaces',
        path:'/all-space',
      });  
    });
};
