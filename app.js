const path = require('path');

// install express: npm install --save express
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect =require('./utils/database').mongoConnect;

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


app.use(errorController.get404);

mongoConnect (() => {
    app.listen(3000);
})
