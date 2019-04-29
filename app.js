const sequelize = require('sequelize')
const express = require('express')
const app = express()
const port = 3000
const index = require('./routes')

app.use(express.urlencoded({extended:false}))

app.use('/', index)

app.listen(port, function(){
    console.log(`listening to port ${port}`)
})


