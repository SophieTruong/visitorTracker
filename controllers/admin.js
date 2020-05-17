/// allow admin actions: CRUD

const Space = require('../models/space');
// const Exhibition = require('../models/exhibition');
// const Tracker = require('../models/tracker');

/* ..... SPACE .....*/
exports.getAddSpace = (req, res, next) => {
    res.render('admin/edit-space', {
      pageTitle: 'Add Space',
      path: '/admin/add-space',
      editing: false
    });
};

exports.postAddSpace = (req, res, next) => {
    const spaceName = req.body.spaceName;
    const spaceID = req.body.spaceID;
    const imageUrl = req.body.imageUrl;

    const space = new Space(spaceName,spaceID,imageUrl);
    space
      .save()
      .then(result =>{
        console.log('New space added');
        res.redirect('/spaces/all-space');
      })
      .catch(err =>{
        console.log(err);
      });
};

// exports.getEditSpace = (req, res, next) => {
//   const editMode = req.query.edit;
//   console.log(editMode);
//   if (!editMode){
//     return res.redirect('/error');
//   }
//   const spaceID = req.params.spaceID;
//   Space.findbyId(spaceID, space =>{
//     console.log(space);
//     if (!space){
//       return res.redirect('/');
//     }
//     res.render('admin/edit-space', {
//       pageTitle: 'Edit Space',
//       path: '/admin/edit-space',
//       editing: editMode,
//       space:space
//     });
//   });
// };

// exports.postEditSpace = (req,res,next) =>{
//   const spaceID = req.body.spcID;
//   const updatedSpaceID = req.body.spaceID;
//   const updatedName = req.body.spaceName;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedSpace = new Space(
//     spaceID,
//     updatedName,
//     updatedSpaceID,
//     updatedImageUrl
//     );
//   updatedSpace.save();
//   res.redirect("/spaces/all-space");
// ;

// }

// /* ..... EXHIBITION .....*/
exports.getAddExhibition = (req, res, next) => {
  res.render('admin/edit-exhibition', {
    pageTitle: 'Add Exhibition',
    path: '/admin/add-exhibition',
    editing: false
  });
};


exports.postAddExhibition = (req, res, next) => {
  const name = req.body.name;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;


  const exhibition = new Exhibition(name,startDate,endDate);
  //console.log(space);
  exhibition
  .save()
  .then(result =>{
      console.log('New exhibition added');
      res.redirect('/');
  })
  .catch(err =>{
    console.log(err);
  })
};

// exports.getEditExhibition = (req, res, next) => {
//   const editMode = req.query.edit;
//   console.log(editMode);
//   if (!editMode){
//     return res.redirect('/error');
//   }
//   const exhibitionID = req.params.exhibitionID;
//   Exhibition.findbyId(exhibitionID, exhibition =>{
//     console.log(exhibition);
//     if (!exhibition){
//       return res.redirect('/error');
//     }
//     res.render('admin/edit-exhibition', {
//       pageTitle: 'Edit Exhibition',
//       path: '/admin/edit-exhibition',
//       editing: editMode,
//       exhibition:exhibition
//     });
//   });
// };

// exports.postEditExhibition = (req,res,next) =>{
//   const exhId = req.body.exhId;
//   const updatedExhName = req.body.name;
//   const updatedStartDate = req.body.startDate;
//   const updatedEndDate = req.body.endDate;
//   const updatedExhibition = new Exhibition(
//     exhId,
//     updatedExhName,
//     updatedStartDate,
//     updatedEndDate
//   );
//   updatedExhibition.save();
//   res.redirect("/")
  
// }
// /* ..... TRACKER .....*/

exports.getAddTracker = (req, res, next) => {
  res.render('admin/edit-tracker', {
    pageTitle: 'Add Tracker',
    path: '/admin/add-tracker',
    editing: false
  });
};

exports.postAddTracker = (req, res, next) => {
  const name = req.body.name;
  const UUID = req.body.UUID;
  const tracker = new Tracker(name, UUID);
  //console.log(space);
  tracker
  .save()
  .then(result =>{
    console.log('New tracker added');
    res.redirect('/trackers/all-trackers');
  })
  .catch(err =>{
    console.log(err);
  })
};

// exports.getEditTracker = (req, res, next) => {
//   const editMode = req.query.edit;
//   console.log(editMode);
//   if (!editMode){
//     return res.redirect('/error');
//   }
//   const trackerID = req.params.trackerID;
//   Tracker.findbyId(trackerID, tracker =>{
//     console.log(tracker);
//     if (!tracker){
//       return res.redirect('/');
//     }
//     res.render('admin/edit-tracker', {
//       pageTitle: 'Edit Tracker',
//       path: '/admin/edit-tracker',
//       editing: editMode,
//       tracker:tracker
//     });
//   });
// };

// exports.postEditTracker =(req, res, next) => {
//   const trckId = req.body.trckId;
//   const updatedTrackerName = req.body.name;
//   const updatedUUID = req.body.UUID;
//   const updatedTracker = new Tracker(
//     trckId,
//     updatedTrackerName,
//     updatedUUID
//   );
//   updatedTracker.save();
//   console.log(updatedTracker);
//   res.redirect("/trackers/all-trackers");
// };

// exports.postDeleteTracker = (req,res,next) =>{
//   const trckId = req.body.trckId;
//   Tracker.deleteById(trckId);
//   res.redirect("/trackers/all-trackers");
// }
