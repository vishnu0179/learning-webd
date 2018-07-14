const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'root',
    password: 'ganesha2'
})

const insert = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
}

connection.query(
    `INSERT INTO persons (name , age, city) VALUES(
        '${insert.name}',
         ${insert.age},
        '${insert.city}'
    )`,     //strings should be inside quotes
    function(err, result){
        if(err){
            console.error(err)
        }else{
            console.log(result)
            console.log("INSERTED SUCCESSFULLY")
        }
        connection.close()

    }
)