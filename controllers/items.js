const item = require('../models/item');
const Item = require('../models/item');
const user = require('../models/user');
const User = require('../models/user');

module.exports = {
    addNewItem, 
    create
};

function addNewItem (req, res) {
    User.findById(req.user, function(err, user){
        res.render('items/new', {userId: req.user.id, user})
    });
}


function create(req, res) {
    Item.create(req.body, function(err, item){
        console.log(item)
        User.findById(req.user._id, function(err, user){
            user.item.push(item._id);
            user.save(function(err){
                res.redirect(`profile`)

            })
        }
    )}
)}     
