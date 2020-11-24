const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const isAuthenticated = require('../utils/authorization')

// GET/users 
router.get('/users', usersCtrl.index);
router.get('/users/:id/profile', isAuthenticated, usersCtrl.profile);

// POST/





module.exports = router;