const express = require('express');
const authController = require('../../../controllers/v1/auth/authController');
const router = express.Router();

router.get('/', authController.login);

module.exports = router;