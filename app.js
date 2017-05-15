var conn = require('./db_connection.js')
var dbInit = require('./db_initialize.js')

dbInit.dropTaskTable(conn)
dbInit.createTaskTable(conn)

dbInit.dropUserTable(conn)
dbInit.createUserTable(conn)

