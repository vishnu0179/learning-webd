const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'root',
    password: 'ganesha2'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,    
        name VARCHAR(50) ,
        age INTEGER NOT NULL,
        city VARCHAR(30) NOT NULL
    )`,                                // JUST A convention can be written in small and capital cases
    function(err, results){
        if(err){
            console.error(err)
        }else{
            console.log("table created succcessfully")
        }
        connection.close();  // closes the connection to prevent memory leaks
    }
)