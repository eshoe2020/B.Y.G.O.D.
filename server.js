const express = require('express');
const morgan = require('morgan');
const port = 3000;

const app = express();

// TODO: connect to DB

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// TODO: Mount routes with app.use()

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});