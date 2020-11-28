const item = require('../models/item');
const Item = require('../models/item');
const user = require('../models/user');
const User = require('../models/user');

module.exports = {
    addNewItem, 
    create, 
    editItem, 
    updateItem, 
    deleteItem,
    all: seeAll, 
    addItemToProfile
};

function addNewItem(req, res) {
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


function editItem(req, res) {
    itemId= req.params.id;
    Item.findById(itemId, function(err, item){
        console.log(itemId);
        res.render(`items/edit`, {item, user: req.user})
    })
}


function updateItem(req, res) {
    Item.findByIdAndUpdate(req.params.id, req.body,
        function(err, item){
            res.redirect(`/users/${req.user._id}/profile`)
    })
}


// function deleteItem(req, res) {
//     Item.findByIdAndDelete(req.params.id, function(err, item){
//         res.redirect(`/users/${req.user._id}/profile`)
//     })
// }

function deleteItem(req, res) {
    Item.findById(req.params.id, function(err, item){
        User.findById(req.user._id, function(err, user){
            index = user.item.indexOf(req.params.id);
            let myUser = req.user._id;
            let deleted = user.item.splice(index,1);
            console.log(req.user._id);
            console.log(req.params.id);
            console.log(index);
            console.log(deleted);
            user.save(function(err){
                res.redirect(`/users/${req.user._id}/profile`)

            })

        })
    })
}


function addItemToProfile (req, res) {
        itemId = req.params.id,
        userId = req.user._id,
    
        Item.findById(itemId, function(err, item){
            User.findById(userId, function(err, user){
                user.item.push(itemId);
                user.save(function(err){
                    res.redirect(`/users/${req.user._id}/profile`)
                })
            })
        })
       
 }



//functional displayAll 
function seeAll (req, res) {
    User.findById(req.user);
    User.find({}).populate('item').exec(function(err, users){
        Item.find({}, function(err, item){
            console.log(req.user);
            res.render('items/all',{
            users, item, user: req.user
            }
            )
        })
    })
}