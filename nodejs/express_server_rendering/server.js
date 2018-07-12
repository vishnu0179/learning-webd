const express = require('express')
const srv = express()


const todoroute = require('./route/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.set('view engine','hbs')

srv.set('views',__dirname+'/views')

srv.use('/todos',todoroute)

srv.listen(4233)