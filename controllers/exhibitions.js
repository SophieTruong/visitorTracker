const Exhibition = require('../models/exhibition');


exports.getExhibition = (req,res,next) =>{
    Exhibition.fetchAll(exhibitions =>{
        res.render('all-exhibition/exhibition-list', {
            exhs: exhibitions,
            pageTitle: 'All Exhibitions',
            path:'/',

          });  
    });
};
