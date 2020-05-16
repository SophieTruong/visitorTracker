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
    constructor(id, name, startDate, endDate){
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    save(){
        getExhibitionsFromFile(exhibitions => {
            if (this.id){
                const existingExIndex = exhibitions.findIndex(
                    exh => exh.id === this.id
                );
                const updatedEx = [...exhibitions];
                updatedEx[existingExIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedEx), err =>{
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                exhibitions.push(this);
                fs.writeFile(p, JSON.stringify(exhibitions), err =>{
                    console.log(err);
                });
            }
        });
    }

    static deleteById(id){
        getExhibitionsFromFile(exhibitions=>{
            const updatedExhibitions = exhibitions.filter(exh => exh.id !== id);
            fs.writeFile(p, JSON.stringify(updatedExhibitions), err =>{
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