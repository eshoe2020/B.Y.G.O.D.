const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const isAuthenticated = require('../utils/authorization');

router.get('/new', isAuthenticated, itemsCtrl.addNewItem);

module.exports = router;