const route = require('express').Router()
// This route is on the "/api/" path

const db = require('./db')


route.get('/persons/', (req, res) => {
    //Send all the persons as an array here
   
    db.getAllPersons()
    .then((persons) => res.send(persons))
    .catch((err) => res.send({error: err}))

    

})

route.post('/persons/', (req, res) => {
    //Add the new person (details are in body)

    db.addNewPersons(req.body.name, req.body.age, req.body.city)
        .then(() => res.redirect('/api/persons/')) //Redirect to get all persons data
        .catch((err) => res.send({error: err}))

})
/* 
route.delete('/persons',(req,res)=>{
    db.deletePersons(req.body.id)
        .then(()=>res.redirect('/api/persons'))
        .catch((err)=>res.send({error:err}))
})
 */

exports = module.exports = {
    route
}