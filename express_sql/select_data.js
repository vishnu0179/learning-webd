const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user:'root',
    password:'ganesha2'
})

connection.query(
    'SELECT * FROM persons',
    function(err,results,fields){                        // results is rows, fields is columns
        if(err){
            console.error(err)
        }else{
            console.log(results)
            console.log(fields)
        }
    }
)