const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spaceSchema = new Schema({
    spaceName: {
        type: String,
        required:true
    },
    imageUrl:{
        type: String
    },
    status: {
        type: String,
        required: true
    },

    // Relation 1 Space with multiple trackers
    trackers:{
        //store an array of tracker info
        devices:[{
            trckId: {type: Schema.Types.ObjectId, ref: 'Tracker'}
        }]
    },
    // Relation 1 Space with 1 exhibition
    exhId:{
        type: Schema.Types.ObjectId,
        ref:'Exhibition'
    }
});


module.exports = mongoose.model('Space',spaceSchema);



// const mongodb = require('mongodb');
// //const getDb = require('../utils/database').getDb;

// class Space{
//     constructor(name,spaceID,image, _id){
//         this.name = name;
//         this.spaceID = spaceID;
//         this.image=image;
//         this._id = _id ? mongodb.ObjectId(_id) : null;
//     }
//     save(){
//         const db = getDb();
//         let dbOp;
//         if (this._id){
//             dbOp = db.collection('spaces').updateOne({_id: this._id}, {$set: this});
//         } else {
//             dbOp = db.collection('spaces').insertOne(this);
//         }
//         return dbOp
//         .then(result =>{
//             console.log(result);
//         })
//         .catch(err =>{
//             console.log(err);
//         })
//     }
//     static fetchAll() {
//         const db = getDb();
//         return db
//           .collection('spaces')
//           .find()
//           .toArray()
//           .then(spaces => {
//             //console.log(spaces);
//             return spaces;
//           })
//           .catch(err => {
//             console.log(err);
//           });
//     }
//     static findById(spcID){
//         const db = getDb();
//         return db
//           .collection('spaces')
//           .find({_id: new mongodb.ObjectId(spcID)})
//           .next()
//           .then(space =>{
//               console.log(space);
//               return space;
//           })
//           .catch(err => {
//             console.log(err);
//           });

//     }
//     static deleteById(spcID){
//         const db = getDb();
//         return db.collection('spaces')
//             .deleteOne({_id: new mongodb.ObjectId(spcID)})
//             .then(result =>{
//                 console.log('Deleted');
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
// }

// module.exports = Space;



// // const fs = require('fs');
// // const path = require('path');

// // const p = path.join(
// //     path.dirname(process.mainModule.filename),
// //     'data',
// //     'spaces.json'
// // );

// // const getSpacesFromFile = cb =>{
// //     fs.readFile(p,(err,fileContent)=>{
// //         if (err) {
// //             cb([]);
// //         } else {
// //             cb(JSON.parse(fileContent)) ;
// //         }
// //     });
// // };

// // module.exports = class Space{
// //     constructor(id, name,spaceID,imageUrl){
// //         this.id = id;
// //         this.name = name;
// //         this.spaceID = spaceID;
// //         this.imageUrl=imageUrl;
// //     }
// //     save(){
// //         getSpacesFromFile(spaces => {
// //             if (this.id){
// //                 const existingSpaceIndex = spaces.findIndex(spc => spc.id === this.id);
// //                 const updatedSpaces = [...spaces];
// //                 updatedSpaces[existingSpaceIndex] = this;
// //                 fs.writeFile(p, JSON.stringify(updatedSpaces), err =>{
// //                     console.log(err);
// //                 });
// //             } else {
// //                 this.id = Math.random().toString();
// //                 spaces.push(this);
// //                 fs.writeFile(p, JSON.stringify(spaces), err =>{
// //                     console.log(err);
// //                 });
// //             }
// //         });
// //     }

// //     static deleteById(id){
// //         getSpacesFromFile(spaces=>{
// //             const updatedSpaces = spaces.filter(spc => spc.id !== id);
// //             fs.writeFile(p, JSON.stringify(updatedSpaces), err =>{
// //                 console.log(err);
// //             });
// //         });
// //     }

// //     static fetchAll(cb){
// //         getSpacesFromFile(cb);
// //     };


// //     static findbyId(id,cb){
// //         getSpacesFromFile(spaces=>{
// //             const space = spaces.find(p => p.id === id)
// //             cb(space);
// //         });
// //     }
// // };