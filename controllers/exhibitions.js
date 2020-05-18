const Exhibition = require('../models/exhibition');


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
