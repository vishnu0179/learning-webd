const user = require('../../db').user
const route = require('express').Router()

route.get('/',(req, res)=>{
    // we want to send an array of all users from database to here

    user.findAll()
        .then((user)=>{
            res.status(200).send(user)
        })
        .catch((err)=>{
            res.status(500).send({
                error: 'could not retrieve users'
            })
        })
})

route.post('/',(req,res)=>{

    user.create({
        name:req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: 'could not add new user'
        })
    })
})

exports= module.exports=route