const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'spaces.json'
);

const getSpacesFromFile = cb =>{
    fs.readFile(p,(err,fileContent)=>{
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent)) ;
        }
    });
};

module.exports = class Space{
    constructor(name,spaceID){
        this.name = name;
        this.spaceID = spaceID;

    }
    save(){
        this.id = Math.random().toString();
        getSpacesFromFile(spaces => {
            spaces.push(this);
            fs.writeFile(p, JSON.stringify(spaces), err =>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        getSpacesFromFile(cb);
    };

    static findbyId(id,cb){
        getSpacesFromFile(spaces=>{
            const space = spaces.find(p => p.id === id)
            cb(space);
        });
    }
};