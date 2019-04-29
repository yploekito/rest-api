const Model = require('../models')
const {User} = Model
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController{
    static signin(req, res){
        User
            .findOne({where:{username : req.body.username}})
            .then((oneUser)=>{
                if(oneUser){
                    if(bcrypt.compareSync(req.body.password, oneUser.password)){ //setelah dihash ubah disini
                        let payload = {
                            id : oneUser.id,
                            username : oneUser.username
                        }
                        let token = jwt.sign(payload, 'phase2')
                        res.json({
                            data: oneUser,
                            token: token
                        })
                    } else {
                        res.status(400).json({msg: 'password/user wrong'})
                    }
                }else{
                    res.status(400).json({msg:'password/user wrong'})
                }
            })
            .catch((err)=>{
                console.log(err)
                res.send(err)
            })
    }

    static signup(req, res){
        let inputObj = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        }
        User
            .create(inputObj)
            .then((newUser)=>{
                res.json(newUser)
            })
            .catch((err)=>{
                res.json(err)
            })
    }
}


module.exports = UserController