const getDb = require('../utils/database').getDb;

class Exhibition{
    constructor(id, name, startDate, endDate){
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    save(){
        const db = getDb();
        return db.collection('exhibitions')
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
        .collection('exhibitions')
        .find()
        .toArray()
        .then(exhibitions=>{
            console.log(exhibitions);
            return exhibitions;
        })
        .catch(err =>{
            console.log(err);
        });
    }
}
module.exports = Exhibition;


// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'exhibitions.json'
// );

// const getExhibitionsFromFile = cb =>{
//     fs.readFile(p,(err,fileContent)=>{
//         if (err) {
//             cb([]);
//         } else {
//             cb(JSON.parse(fileContent)) ;
//         }
//     });
// };

// module.exports = class Exhibition{
//     constructor(id, name, startDate, endDate){
//         this.id = id;
//         this.name = name;
//         this.startDate = startDate;
//         this.endDate = endDate;
//     }
//     save(){
//         getExhibitionsFromFile(exhibitions => {
//             if (this.id){
//                 const existingExIndex = exhibitions.findIndex(
//                     exh => exh.id === this.id
//                 );
//                 const updatedEx = [...exhibitions];
//                 updatedEx[existingExIndex] = this;
//                 fs.writeFile(p, JSON.stringify(updatedEx), err =>{
//                     console.log(err);
//                 });
//             } else {
//                 this.id = Math.random().toString();
//                 exhibitions.push(this);
//                 fs.writeFile(p, JSON.stringify(exhibitions), err =>{
//                     console.log(err);
//                 });
//             }
//         });
//     }

//     static fetchAll(cb){
//         getExhibitionsFromFile(cb);
//     };

//     static findbyId(id,cb){
//         getExhibitionsFromFile(exhibitions=>{
//             const exhibition = exhibitions.find(p => p.id === id)
//             cb(exhibition);
//         });
//     }

// };