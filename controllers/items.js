const Item = require('../models/item');

module.exports = {
    addNewItem
};

function addNewItem (req, res) {
    res.render('/items/new')
}