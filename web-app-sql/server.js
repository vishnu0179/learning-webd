const express = require('express')
const srv = express()
const path=require('path')

const pages = require('./pages')
const api = require('./api')
        
srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use('/pages',pages.route)  
srv.use('/api',api.route)

srv.use('/',express.static(path.join(__dirname,'public_static')))

 

srv.listen(2020,()=>{
    console.log("server started at https://localhost:2020")
})