const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const errorController = require('./controllers/error');
const mongoConnect =require('./utils/database').mongoConnect;

const app = express();


app.set('view engine','ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const spaceRoutes = require('./routes/space');
const exhibitionRoutes = require('./routes/exhibition');
const trackerRoutes = require('./routes/tracker');

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null,true);
    } else{
        cb(null,false);
    }
}

var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'image')
    },
    filename: function (req, file, cb) {
	//cb(null, file.originalname)
	// this helps ensure the image us unique
	cb(null, new Date().toISOString() + '-' + file.originalname) 
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({storage: storage2,fileFilter: fileFilter}).single('image')) // upload an image for add space
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',exhibitionRoutes);
app.use('/admin', adminRoutes);
app.use('/spaces',spaceRoutes);
app.use('/trackers',trackerRoutes);

// API for the database
app.use(bodyParser.json())
var message = {"msg":"preview"};
var image = 0;

app.get('/tracker/api/', function (req, res) {
    console.log(req.body);
    if (req.body.action == 'tracker-preview') {
	message = {"msg":"preview"};
	image = 0;
	while (image == 0) {
	    ;
	}
	// after image is recived we should return page with the image here
    }        
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
	cb(null, './previews/')
    },
    filename: function (req, file, cb) {
	cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

app.post('/tracker/api/', upload.single('file'),  function (req, res) {
    if (req.file) {
	console.log(req.file);
	image = 1;
	message = {"msg":"setup"};
    } else {
	console.log(req.body);
    }
    res.send(message);
});

app.use(errorController.get404);

mongoConnect (() => {
    app.listen(3000);
})
