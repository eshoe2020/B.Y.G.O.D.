const User = require('../models/user');

module.exports = {
    index,
    profile,
};

function index(req, res) {
    User.find({}, function(err, users){
        res.render('users/index', {
            users, 
            user: req.user
        })
    })
}

function profile(req, res) {
    User.find({}, function(err, users) {
        res.render('users/profile', {
            users, 
            user: req.user
        })
    })
}
