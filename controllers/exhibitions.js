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

exports.getEx = (req, res, next) => {
    const id = req.params.exhibitionId;
    Exhibition.findbyId(id,exhibition =>{
      console.log(exhibition);
    });
    res.redirect('/');
  }
