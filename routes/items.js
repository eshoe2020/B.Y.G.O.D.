const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const isAuthenticated = require('../utils/authorization');

router.get('/users/:id/items/new', isAuthenticated, itemsCtrl.addNewItem);
router.post('/users/:id/profile', isAuthenticated, itemsCtrl.create);


module.exports = router;