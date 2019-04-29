// const sequelize = require('sequelize')
const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')
const authentication = require('../middlewear/authentication')
const authorization = require('../middlewear/authorization')


router.use(authentication)
router.get('/', todoController.getTodos)
// router.get('/', (req,res)=>{
//     res.json('hello')
// })
router.get('/:id', authorization, todoController.getTodosById)
router.post('/', todoController.createTodo)
router.delete('/:id', authorization, todoController.deleteTodo)
router.put('/:id', authorization, todoController.updatePutInfo)
router.patch('/:id', authorization, todoController.updatePatchInfo)

module.exports  = router