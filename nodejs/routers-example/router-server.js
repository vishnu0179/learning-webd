const express = require('express')
const srv= express()

const teacherRoute = require('./router/teacher')
const studentRoute = require('./router/student')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.use('/students',studentRoute)
srv.use('/teachers',teacherRoute)
srv.use('/',(req,res)=>res.send('404 not found'))


srv.listen(4040)