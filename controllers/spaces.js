const Space = require('../models/space');
const Exhibition = require('../models/exhibition');

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


exports.postAddToExh = (req,res,next) =>{
  const spcID = req.body.spcID;
  Space.findById(spcID)
  .then(space =>{
    return req.exhibition.addToExhibition(space);
  })
  .then(result=>{
    res.redirect('/');
  })
  .catch(err =>{
    console.log(err);
  })
}

