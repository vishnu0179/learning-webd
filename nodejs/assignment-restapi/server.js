const express = require('express')
const srv= express()

const todoRoute = require('./todolist')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.use('/todos',todoRoute)



srv.listen(2323)
