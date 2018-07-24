const express = require('express')
const srv = express()

const path = require('path')

srv.use(express.json())
srv.use(express.urlencoded({extended:true})) 

srv.use('/',express.static(path.join(__dirname,'public')))
srv.use('/api',require('./routes/api').route)  // requiring index.js inside api directory

srv.listen(2323,()=>console.log("Server started at https://localhost:2678"))