var createDummyUsers = function(conn){
    var q = 'INSERT INTO users (user_name) VALUES ' +
        '(\'Bob\'), (\'John\'), (\'Frank\'), (\'Natalie\'), (\'Mike\'), (\'Rob\'), (\'Bran\');'
    conn.query(q, function(error, results, fields){
        if(error) {throw error}
        console.log("Create Dummy Users Finished")
        console.log(results)
    })
}

module.exports = {
    createDummyUsers: createDummyUsers
}


// INSERT INTO MyTable ( Column1, Column2 ) VALUES
// ( Value1, Value2 ), ( Value1, Value2 )