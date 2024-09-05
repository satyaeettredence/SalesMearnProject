const express = require('express');

const router = express.Router(); 

const salesController = require('../controller/salesController');
const userController = require('../controller/userController');
const inventoryController = require('../controller/inventoryController');
const authController = require('../controller/authController');


router.post('/signup', authController.userSignUp);
router.post('/login', authController.login);
router.get('/sales', salesController.getAllSales);
router.get('/user', userController.getAllUsers);
router.get('/inventory', inventoryController.getAllInventory);

module.exports = router