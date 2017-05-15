var conn = require('./db_connection.js')
var dbInit = require('./db_initialize.js')
var dbDummy = require('./db_dummy.js')

dbDummy.createDummyUsers(conn)

