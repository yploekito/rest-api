// jwt = require('jsonwebtoken')
const Model = require('../models')
const {Todo} = Model

module.exports = function(req, res, next){
    Todo.findOne({where:{id:req.params.id}})
    .then((oneTodo)=>{
        if(req.decoded.id === oneTodo.UserId){
            next()
        }
        else{
            res.status(400).send({message:'not authorized'})
        }
    })
    .catch((err)=>{
        res.status(500).send()
    })
}