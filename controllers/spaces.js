const Space = require('../models/space');

exports.getSpaces =  (req, res, next) => {
    Space.fetchAll()
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
