
const route= require('express').Router()

///OR///

/* 

const express = require('express')
const router = express().router 
const route= router()

*/

let teachers =[
    {name:"Arnav Gupta", subject:"WebDev"},
    {name:'prateek', subject:'competitive coding'}
]
route.get('/',(req,res)=>{res.send(teachers)}) //(req,res)=>{}  means function(req,res){}
route.get('/:id',(req,res)=>{
    if(isNaN(parseInt(req.params.id))){        //id is a wild card it should called after '/add' or should 
        next();                                // be called like this
    }

    res.send(teachers[req.params.id])})

route.get('/add',(req,res)=>{
    teachers.push({
        name: req.query.name,
        subject: req.query.subject
    })
    res.send(teachers)
})

module.exports=route