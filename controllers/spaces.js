const Space = require('../models/space');

exports.getSpaces =  (req, res, next) => {
    Space.find()
    .then(spaces=>{
      res.render('all-spaces/space-list', {
        spcs: spaces,
        pageTitle: 'All spaces',
        path:'/all-space',
      });  
    })
    .catch(err=>{
      console.log(err);
    })
};
