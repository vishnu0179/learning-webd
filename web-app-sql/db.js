const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'root',
    password: 'ganesha2'
})

function getAllPersons(){
    
    return new Promise(function(resolve, reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            }
        )
    })
}

function addNewPersons(name,age ,city){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO persons (name, age ,city) VALUES(?,?,?)`,
            [name,age, city],
            function(err, result){
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            }
        )
    })
}

/* function deletePersons(id){
    return new Promise(function(resolve,reject){
        connection.query(
            `DELETE FROM persons WHERE id = ?;
            ALTER TABLE persons AUTO_INCREMENT = 1;`,
            [id],
            function(err,result){
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            }
        )
    })
} */

module.exports={
    getAllPersons,
    addNewPersons//,
    //deletePersons
}