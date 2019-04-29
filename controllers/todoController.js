const Model = require('../models')
const {Todo} = Model

class TodoController{
    static getTodos(req, res){
        Todo
            .findAll({
                include:Model.User
            },{
                where:
                {
                    UserId:req.params.id
                }
            })
            .then((allUsers)=>{
                res.json(allUsers)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    }
    static getTodosById(req, res){
        Todo
            .findOne({
                where:{
                    id: req.params.id
                }
            })
            .then((oneUser)=>{
                res.json(oneUser)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    }

    static createTodo(req, res){
        Todo
            .create({
                title : req.body.title,
                description : req.body.description,
                UserId: req.decoded.id
            })
            .then((createdTodo)=>{
                res.json(createdTodo)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    }

    static deleteTodo(req, res){
        Todo
            .destroy({
                where:{id:req.params.id}
            })
            .then((numberDestroyed)=>{
                res.json(numberDestroyed)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    }
    static updatePutInfo(req, res){
        let updateObj = {
            title : req.body.title,
            description : req.body.description
        }
        Todo.
            update(updateObj,{
                where: {id:req.params.id}
            })
            .then((updated)=>{
                res.json(updated)
            })
            .catch((err)=>{
                res.status(500).json(errt)
            })
    }
    static updatePatchInfo(req,res){
        let updateObj = {
            title : req.body.tile
        }
        Todo.
            update(updateObj,{
                where: {id:req.params.id}
            })
            .then((updated)=>{
                res.json(updated)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    }
}

module.exports = TodoController