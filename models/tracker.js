
const getDb = require('../utils/database').getDb;

class Tracker{
    constructor(name,UUID){
    this.name = name;
    this.UUID = UUID;
    }

    save(){
        const db = getDb();
        return db.collection('trackers')
            .insertOne(this)
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
            console.log(trackers);
            return trackers;
        })
        .catch(err =>{
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