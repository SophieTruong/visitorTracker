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

// reach 1 space
exports.getSpace = (req, res, next) => {
  const space_id = req.params.spaceId;
  console.log(space_id);
  Space.findbyId(space_id,space =>{
    console.log(space);
  });
  res.redirect('/spaces/all-space');
}