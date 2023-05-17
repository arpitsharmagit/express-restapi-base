const express = require('express');
const router = express.Router();
const { getUser, createUser } = require('../../../controllers/v1/customer/cutomerController')

router.get('/', getUser);
router.post('/', createUser);

module.exports = router;