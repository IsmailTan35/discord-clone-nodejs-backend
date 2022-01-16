import mysql  from 'mysql'

const database = (con) => {

    con.connect((err) =>{
      if(err) {
        console.log("Could not connect to mysql.",err)
        con.end()
        setTimeout(database, 5000)
      }
      else{
        console.log("Mysql connection successfull.")
        con.connect((err) =>{
            con.query("CREATE DATABASE wooztracker", (err, result) =>{
              if(err ) {
                console.log(err.sqlMessage)
              }
              else{
                console.log("Database created")
              }      
            });

            con.changeUser({database : 'wooztracker'}, function(err) { 
              if (err) throw err; 
            });
        })
      }
    })
   
  }

const con = mysql.createConnection({
    url: "192.168.0.24",
    user: "root",
    password: "",
    waitForConnections: true,
})

database(con)

export default con