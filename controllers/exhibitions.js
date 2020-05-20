const Exhibition = require('../models/exhibition');
const Space = require('../models/space');


exports.getExhibition = (req,res,next) =>{
    Exhibition.find()
    .then(exhibitions =>{
        res.render('all-exhibition/exhibition-list', {
            exhs: exhibitions,
            pageTitle: 'All Exhibitions',
            path:'/',
          });  
    })
    .catch(err=>{
        console.log(err);
      })
};
