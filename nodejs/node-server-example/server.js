const express = require('express')
const server = express()

server.get('/',function(request,response,next){
    response.send("Hello World")
})

server.get('/greeter/:tod',function(req,res,next){
    let tod="morning"
    switch(req.params.tod){
        case "morning": tod="morning";
                        break;
        case "evening": tod="evening"
    }
    
    let greeting = "Good" +tod+", "  + req.query.name
    res.send(greeting)
})

server.get('/html',function(req,res,next){
    res.send(`
    <html>
        <body>
            <h1>This is a heading</h1>
        </body>
    </html>
    `)
})

server.listen(2121)

/////////////////
///middlewares///
////////////////

const m1 = function(req,res,next){
    console.log("We are in middleware 1")
    next()
}

const m2 = function(req,res,next){
    console.log("We are in middleware 2")
    next()
}
const m3 = function(req,res,next){
    console.log("We are in middleware 3")
    next()
}

server.use(m1)
server.use('/b',m2) // does not execute as it does not matche path

server.use('/',function(req, res ,next){  //  server sends back response
    res.send("hello world")
})

server.use(m3)