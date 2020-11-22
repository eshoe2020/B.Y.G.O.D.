const express = require('express');
const router = express.Router();
const listsCtrl = require('../controllers/lists');
const isAuthenticated = require('../utils/authorization');

module.exports = router;