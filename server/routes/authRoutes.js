const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

const auth = require('../middleware/auth');

// Define routes
router.post('/login', login);
router.post('/register', auth);

module.exports = router;
