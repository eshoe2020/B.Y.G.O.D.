const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const isAuthenticated = require('../utils/authorization');

router.get('/items/new', isAuthenticated, itemsCtrl.addNewItem);
router.post('/users/:id/profile', isAuthenticated, itemsCtrl.create);
router.get('/items/:id/edit', isAuthenticated, itemsCtrl.editItem);
router.put('/items/:id', isAuthenticated, itemsCtrl.updateItem);
router.delete('/items/:id', isAuthenticated, itemsCtrl.deleteItem);

module.exports = router;