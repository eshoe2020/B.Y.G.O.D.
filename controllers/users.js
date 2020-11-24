const User = require('../models/user');
const Item = require('../models/item')

module.exports = {
    index,
    profile,
};

function index(req, res) {
    User.find({}, function(err, users){
        res.render('users/index', {
            users, 
            user: req.user,
            userId: req.user._id
        })
    })
}

function profile(req, res) {
    User.findById(req.query.id).populate('item').exec(function(err, users){
        Item.find({}, function(err, items){
            res.render(`users/profile`, {
                users, 
                user: req.user,
                userId: req.user._id,
                items
            })
        }
    )}
)}

