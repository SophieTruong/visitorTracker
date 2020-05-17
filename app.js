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
app.get('/tracker/api/', function (req, res) {
    message = {"msg":"preview"};
    
});

app.post('/tracker/api/', function (req, res) {
    console.log(req.body);
    if (req.body.msg == 'preview') {
	message = {"msg":"setup"};
    }
    res.send(message);
});

app.use(errorController.get404);

app.listen(3000);
