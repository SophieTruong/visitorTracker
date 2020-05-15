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
    constructor(id, name,spaceID,imageUrl){
        this.id = id;
        this.name = name;
        this.spaceID = spaceID;
        this.imageUrl=imageUrl;
    }
    save(){
        getSpacesFromFile(spaces => {
            if (this.id){
                const existingSpaceIndex = spaces.findIndex(spc => spc.id === this.id);
                const updatedSpaces = [...spaces];
                updatedSpaces[existingSpaceIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedSpaces), err =>{
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                spaces.push(this);
                fs.writeFile(p, JSON.stringify(spaces), err =>{
                    console.log(err);
                });
            }
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