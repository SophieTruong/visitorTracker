const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const mongoConnect = require('./utils/database').mongoConnect;
const app = express();


app.set('view engine','ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const spaceRoutes = require('./routes/space');
const exhibitionRoutes = require('./routes/exhibition');
const trackerRoutes = require('./routes/tracker');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',exhibitionRoutes);
app.use('/admin', adminRoutes);
app.use('/spaces',spaceRoutes);
app.use('/trackers',trackerRoutes);

// API for the database
app.use(bodyParser.json())
var message = {"msg":"setup"};
var image = 0;

app.get('/tracker/api/', function (req, res) {
    console.log(req.body);
    if (req.body.action == 'tracker-preview') {
	message = {"msg":"preview"};
	while (image == 0) {
	    ;
	}
	// after image is recived we should return page with the image
	image = 0;
    }
        
});

app.post('/tracker/api/', function (req, res) {
    console.log(req.body);
    if (req.body.msg == 'preview') {
	image = 1;
	message = {"msg":"setup"};
    }
    res.send(message);
});

var multer = require('multer');
var upload = multer({dest: './uploads/'});

app.post('/tracker/api/upload/', upload.single('image'), function(req, res) {
    if(req.file) console.log(req.file);
}

app.use(errorController.get404);

app.listen(3000);
