let express = require('express')
let Router=express.Router
let route = Router()

///OR///

// const route= require('express').router()

let students=[
    {name:'Vishnu',college:'Amity'},
    {name:'abc',college:'def'},
    {name:'raghav',college:'xyz'}
]

route.get('/',(req,res)=>{res.send(students)})
route.post('/',(req,res)=>{
    students.push({
        name: req.body.name,
        college: req.body.college
    })
    res.send(students)
})
route.get('/:id',(req,res)=>{res.send(students[req.params.id])})  //(req,res)=>{}  means function(req,res){}

module.exports=route