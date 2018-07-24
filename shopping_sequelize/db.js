const sequelize = require('sequelize')

const db = new sequelize('shopdb','root','ganesha2',{
    host: 'localhost',
    dialect:'mysql',
    pool: {

        min: 0,
        max:4
    }
})

const user = db.define('users',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull:false
    }
})

const product = db.define('products',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: sequelize.STRING,
        allowNull: false
    },
    manufacturer: sequelize.STRING,
    price:{
        type: sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }

})

db.sync()
    .then(()=>console.log("database has been synced"))
    .catch((err)=>{console.error('error crreating databases')})

exports = module.exports={
    user, product
}