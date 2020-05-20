const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const multer = require('multer');

const errorController = require('./controllers/error');

const Space = require('./models/space');
const Exhibition = require('./models/exhibition');
const Tracker = require('./models/tracker');

const app = express();


app.set('view engine','ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const spaceRoutes = require('./routes/space');
const exhibitionRoutes = require('./routes/exhibition');
const trackerRoutes = require('./routes/tracker');


app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({storage: storage2,fileFilter: fileFilter}).single('image')) // upload an image for add space
app.use(express.static(path.join(__dirname, 'public')));


// create 1 test space that connect to test tracker
app.use((req,res,next)=>{
    Exhibition.findById('5ec46e130053f341cd71506b')
    .then(exhibition => {
        req.exhibition = exhibition;
        next();
    })
    .catch(err => {
        console.log(err);
    })
})

app.use('/',exhibitionRoutes);
app.use('/admin', adminRoutes);
app.use('/spaces',spaceRoutes);
app.use('/trackers',trackerRoutes);

// API for the database
app.use(bodyParser.json())
var message = {"msg":"setup"};
var image = false;

function waitAndRespond(res) {
    if(image===false) {
	setTimeout(waitAndRespond, 50, res);
	return;
    }
    res.send('Hello world!');
}

app.get('/tracker/api/', function (req, res) {
    console.log(req.body);
    if (req.body.action == 'tracker-preview') {
	message = {"msg":"preview"};
	image = false;
	waitAndRespond(res);
    }        
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
	cb(null, './public/previews/')
    },
    filename: function (req, file, cb) {
	cb(null, 'image.jpg')
    }
});

var upload = multer({ storage: storage });

app.post('/tracker/api/', upload.single('file'),  function (req, res) {
    if (req.file) {
	console.log(req.file);
	image = true;
	message = {"msg":"setup"};
    } else {
	console.log(req.body);
    }
    res.send(message);
});

app.use(errorController.get404);

mongoose
    .connect ('mongodb+srv://sophie:onalFah9s3S8k3Ek@cluster0-8lddz.mongodb.net/space?retryWrites=true&w=majority'
    , { useUnifiedTopology: true })
    . then( result => {
        Exhibition.findOne().then(exhibition=>{
            if (!exhibition){
                const testExhibition = new Exhibition({
                    name: 'Test Exhibition',
                    startDate: '2020-05-01T00:00:00.000Z',
                    endDate: '2020-05-30T00:00:00.000Z',
                    exhLocations: {
                        spaces: []
                    }
                });
                testExhibition.save();
            }
        })
        app.listen(3000);  
    })
    .catch(err =>{
        console.log(err);
    })
