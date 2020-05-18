const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

class Tracker{
    constructor(name,UUID,_id){
    this.name = name;
    this.UUID = UUID;
    this._id = mongodb.ObjectId(_id);
    }

    save(){
        const db = getDb();
        let dbOp;
        if (this._id){
            dbOp = db.collection('trackers').updateOne({_id: this._id}, {$set: this})
        } else {
            dbOp = db.collection('trackers').insertOne(this)
        }
        return dbOp
            .then(result=>{
                console.log(result);
            })
            .catch(err =>{
                console.log(err);
            });

    }
    static fetchAll(){
        const db = getDb();
        return db
        .collection('trackers')
        .find()
        .toArray()
        .then(trackers=>{
            //console.log(trackers);
            return trackers;
        })
        .catch(err =>{
            console.log(err);
        });
    }

    static findById(trckId){
        const db = getDb();
        return db
          .collection('trackers')
          .find({_id: new mongodb.ObjectId(trckId)})
          .next()
          .then(tracker =>{
              console.log(tracker);
              return tracker;
          })
          .catch(err => {
            console.log(err);
          });
    }
    static deleteById(trckId){
        const db = getDb();
        return db.collection('trackers')
            .deleteOne({_id: new mongodb.ObjectId(trckId)})
            .then(result =>{
                console.log('Deleted');
            })
            .catch(err => {
                console.log(err);
            });
    }
}
module.exports = Tracker;


// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'trackers.json'
// );

// const getTrackersFromFile = cb =>{
//     fs.readFile(p,(err,fileContent)=>{
//         if (err) {
//             cb([]);
//         } else {
//             cb(JSON.parse(fileContent)) ;
//         }
//     });
// };

// module.exports = class Tracker{
//     constructor(id,name,UUID){
//         this.id = id;
//         this.name = name;
//         this.UUID = UUID;

//     }
//     save(){
//         getTrackersFromFile(trackers => {
//             if(this.id){
//                 const existingTrackerIndex = trackers.findIndex(tracker => tracker.id === this.id);
//                 const updatedTrackers = [...trackers];
//                 updatedTrackers[existingTrackerIndex] = this;
//                 fs.writeFile(p, JSON.stringify(updatedTrackers), err =>{
//                     console.log(err);
//                 });
//                 console.log(updatedTrackers)
//             } else {
//                 this.id = Math.random().toString();
//                 trackers.push(this);
//                 fs.writeFile(p, JSON.stringify(trackers), err =>{
//                     console.log(err);
//                 });
//             }
//         });
//     }

//     static fetchAll(cb){
//         getTrackersFromFile(cb);
//     };

//     static findbyId(id,cb){
//         getTrackersFromFile(trackers=>{
//             const tracker = trackers.find(p => p.id === id)
//             cb(tracker);
//         });
//     }

// };