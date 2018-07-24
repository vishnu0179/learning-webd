const route = require('express').Router()
const product = require('../../db').product

route.get('/',(req,res)=>{
    //GET ALL PRODUCTS
    product.findAll()
        .then((products)=>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Could not retrieve products"
            })
        })

})

route.post('/',(req,res)=>{
    // add a new product
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:'price is not a valid number'
        })
    }

    product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((products)=>{
        res.status(201).send(products)
    }).catch((err)=>{
        res.status(501).send({
            error:"Error adding Products"
        })
    })

})

exports=module.exports=route