const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'trackers.json'
);

const getTrackersFromFile = cb =>{
    fs.readFile(p,(err,fileContent)=>{
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent)) ;
        }
    });
};

module.exports = class Tracker{
    constructor(name,UUID){
        this.name = name;
        this.UUID = UUID;

    }
    save(){
        this.id = Math.random().toString();
        console.log(this.id);
        getTrackersFromFile(trackers => {
            trackers.push(this);
            fs.writeFile(p, JSON.stringify(trackers), err =>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        getTrackersFromFile(cb);
    };

    static findbyId(id,cb){
        getTrackersFromFile(trackers=>{
            const tracker = trackers.find(p => p.id === id)
            cb(tracker);
        });
    }

};