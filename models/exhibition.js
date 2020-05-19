const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exhibitionSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    startDate:{
        type: Date,
        get: value => value.toDateString(),
        required:true
    },
    endDate:{
        type: Date,
        get: value => value.toDateString(),
        required:true
    },
    spaces:{
        // spaces is an array -> syntax: spaces: [ ]
        spaces:[{
            spcId: {type: Schema.Types.ObjectId, ref: 'Space'},

            // trackers is also an array
            trckId: {
                type: Schema.Types.ObjectId, 
                ref: 'Tracker'},
        }]
    }
});

module.exports = mongoose.model('Exhibition',exhibitionSchema);









// const mongodb = require('mongodb');
// //const getDb = require('../utils/database').getDb;

// class Exhibition{
//     constructor(name, startDate, endDate, _id){
//         this.name = name;
//         this.startDate = startDate;
//         this.endDate = endDate;
//         this._id = _id ? mongodb.ObjectId(_id) : null;
//     }
//     save(){
//         const db = getDb();
//         let dbOp;
//         if (this._id){
//             dbOp = db.collection('exhibitions').updateOne({_id: this._id}, {$set: this});
//         } else {
//             dbOp = db.collection('exhibitions').insertOne(this);
//         }
//         return dbOp
//             .then(result=>{
//                 console.log(result);
//             })
//             .catch(err =>{
//                 console.log(err);
//             });

//     }
//     static fetchAll(){
//         const db = getDb();
//         return db
//         .collection('exhibitions')
//         .find()
//         .toArray()
//         .then(exhibitions=>{
//             //console.log(exhibitions);
//             return exhibitions;
//         })
//         .catch(err =>{
//             console.log(err);
//         });
//     }

//     static findById(exhId){
//         const db = getDb();
//         return db
//           .collection('exhibitions')
//           .find({_id: new mongodb.ObjectId(exhId)})
//           .next()
//           .then(exhibition =>{
//               console.log(exhibition);
//               return exhibition;
//           })
//           .catch(err => {
//             console.log(err);
//           });

//     }
//     static deleteById(exhId){
//         const db = getDb();
//         return db.collection('exhibitions')
//             .deleteOne({_id: new mongodb.ObjectId(exhId)})
//             .then(result =>{
//                 console.log('Deleted');
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
// }
// module.exports = Exhibition;


// // const fs = require('fs');
// // const path = require('path');

// // const p = path.join(
// //     path.dirname(process.mainModule.filename),
// //     'data',
// //     'exhibitions.json'
// // );

// // const getExhibitionsFromFile = cb =>{
// //     fs.readFile(p,(err,fileContent)=>{
// //         if (err) {
// //             cb([]);
// //         } else {
// //             cb(JSON.parse(fileContent)) ;
// //         }
// //     });
// // };

// // module.exports = class Exhibition{
// //     constructor(id, name, startDate, endDate){
// //         this.id = id;
// //         this.name = name;
// //         this.startDate = startDate;
// //         this.endDate = endDate;
// //     }
// //     save(){
// //         getExhibitionsFromFile(exhibitions => {
// //             if (this.id){
// //                 const existingExIndex = exhibitions.findIndex(
// //                     exh => exh.id === this.id
// //                 );
// //                 const updatedEx = [...exhibitions];
// //                 updatedEx[existingExIndex] = this;
// //                 fs.writeFile(p, JSON.stringify(updatedEx), err =>{
// //                     console.log(err);
// //                 });
// //             } else {
// //                 this.id = Math.random().toString();
// //                 exhibitions.push(this);
// //                 fs.writeFile(p, JSON.stringify(exhibitions), err =>{
// //                     console.log(err);
// //                 });
// //             }
// //         });
// //     }

// //     static fetchAll(cb){
// //         getExhibitionsFromFile(cb);
// //     };

// //     static findbyId(id,cb){
// //         getExhibitionsFromFile(exhibitions=>{
// //             const exhibition = exhibitions.find(p => p.id === id)
// //             cb(exhibition);
// //         });
// //     }

// // };