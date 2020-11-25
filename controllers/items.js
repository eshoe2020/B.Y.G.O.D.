const item = require('../models/item');
const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
    addNewItem, 
    create, 
    editItem, 
    updateItem
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

function editItem (req, res) {
    Item.findById(req.params.id, function(err, item){
        res.render(`items/edit`, {item, user: req.user})
    })
}

function updateItem (req, res) {
    
    Item.findOneAndUpdate({ObjectId: req.params.id});
        item.content = req.body;
        res.redirect('profile')
}