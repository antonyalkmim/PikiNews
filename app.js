const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const Routes = require('./routes.js');

let app = express();


// view engine setup
//==============================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Configs
//==============================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {
    maxage: '2h'
}));


//Initialize routes
//==============================
Routes(app);



module.exports = app;