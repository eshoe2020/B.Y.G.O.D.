const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const isAuthenticated = require('../utils/authorization');

router.get('/items/new', isAuthenticated, itemsCtrl.addNewItem);
router.post('/users/:id/profile', isAuthenticated, itemsCtrl.create);
router.get('/items/:id/edit', isAuthenticated, itemsCtrl.editItem);
router.put('/users/:id/profile', isAuthenticated, itemsCtrl.updateItem);

module.exports = router;