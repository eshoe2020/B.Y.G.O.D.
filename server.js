const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = 3000;

require('dotenv').config()
const app = express();

require('./config/database');
require('./config/passport');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'BYGOD!',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// TODO: Mount routes with app.use()

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});