jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if(req.headers.hasOwnProperty('token')){
        try{
            const decoded = jwt.verify(req.headers.token, 'phase2')
            req.decoded = decoded
            next()
        } catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }
}