const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'exhibitions.json'
);

const getExhibitionsFromFile = cb =>{
    fs.readFile(p,(err,fileContent)=>{
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent)) ;
        }
    });
};

module.exports = class Exhibition{
    constructor(name, startDate, endDate){
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    save(){
        this.id = Math.random().toString();
        getExhibitionsFromFile(exhibitions => {
            exhibitions.push(this);
            fs.writeFile(p, JSON.stringify(exhibitions), err =>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        getExhibitionsFromFile(cb);
    };

    static findbyId(id,cb){
        getExhibitionsFromFile(exhibitions=>{
            const exhibition = exhibitions.find(p => p.id === id)
            cb(exhibition);
        });
    }

};