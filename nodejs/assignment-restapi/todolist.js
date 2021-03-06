const route = require('express').Router()

let todolist = [
    {todo:"Wake up", done:'true'},
    {todo:"Do Homework", done:'false'}
]

route.get('/',(req, res)=>{
    res.send(todolist)
})
route.post('/',(req, res)=>{
    todolist.push({
        todo: req.body.todo,
        done: req.body.done
    })
    res.send(todolist)
})
route.get('/:id',(req,res)=>{
    res.send(todolist[req.params.id])
})
route.patch('/:id',(req , res)=>{
    todolist[req.params.id]={
        todo:req.body.todo,
        done: req.body.done
    }
    res.send(todolist)
})
route.delete('/:id',(req, res)=>{
    delete todolist[req.params.id]
    res.send(todolist)
})
module.exports=route