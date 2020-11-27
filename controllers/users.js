const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
    index,
    profile,
};

function index(req, res) {
    User.find({}, function(err, users){
        res.render('users/index', {
            users, 
            user: req.user,
        })
    })
}

function profile(req, res) {
    User.findById(req.params.id).populate('item').exec(function(err, users){
        console.log(users);    
        res.render('users/profile', {
                users,
                user: req.user,
               
            })
        })
}