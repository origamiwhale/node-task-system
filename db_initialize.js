var createTaskTable = function(conn){
   var query = 'CREATE TABLE tasks(' +
   'task_id INT NOT NULL AUTO_INCREMENT, ' +
   'task_summary VARCHAR(100) NOT NULL, ' +
   'task_description VARCHAR(1600) NOT NULL, ' +
   'creation_date DATE, ' +
   'fk_user_id INT, ' +
   'PRIMARY KEY ( task_id ) );'
   conn.query(query, function(error, results, fields){
       if(error) {throw error}
       console.log("Create Table Tasks Finished")
   })
}

var dropTaskTable = function(conn){
    var query = 'DROP TABLE IF EXISTS tasks'
    conn.query(query, function(error, results, fields){
        if(error) {throw error}
        console.log('Drop Table Tasks Finished')
    })
}

var createUserTable = function(conn){
    var query = 'CREATE TABLE users(' +
        'user_id INT NOT NULL AUTO_INCREMENT, ' +
        'user_name VARCHAR(60) NOT NULL, ' +
        'PRIMARY KEY ( user_id ) );'
    conn.query(query, function(error, results, fuelds){
        if(error) {throw error}
        console.log('Create Table Users Finished')
    })
}

var dropUserTable = function(conn){
    var q = 'DROP TABLE IF EXISTS users'
    conn.query(q, function(error, results, fields){
        if(error) {throw error}
        console.log('Drop Table Users Finished')
    })
}

module.exports = {
    createTaskTable: createTaskTable,
    dropTaskTable: dropTaskTable,
    createUserTable: createUserTable,
    dropUserTable: dropUserTable
}