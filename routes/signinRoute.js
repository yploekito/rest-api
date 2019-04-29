const express = require('express')
const router = express.Router()
const UserController = require('../controllers/usercontroller')


router.post('/', UserController.signin)

module.exports = router