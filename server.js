const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 3000;

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const itemsRoutes = require('./routes/items');

const app = express();

app.set('view engine', 'ejs');

require('dotenv').config()

require('./config/database');
require('./config/passport');


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    res.locals.user = req.user;
    next();
});

app.use('/', indexRoutes);
app.use('/', usersRoutes);
app.use('/', itemsRoutes);


app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});