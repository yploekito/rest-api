// const sequelize = require('sequelize')
const express = require('express')
const router = express.Router()
const todoRoute = require('./todoRoute')
const signinRoute = require('./signinRoute')
const signupRoute = require('./signupRoute')

router.use('/api/todos', todoRoute)
router.use('/api/signin', signinRoute)
router.use('/api/signup', signupRoute)

module.exports  = router