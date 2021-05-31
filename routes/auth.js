const express = require('express');
const router = express.Router();

const Authcontroller = require('../controllers/authcontroler');
router.post('/register', Authcontroller.register);
//router.post('/register', Authcontroller.register);

module.exports = router;
console.log('hi ');