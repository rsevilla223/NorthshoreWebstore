var express   =    require("express");
 var mysql     =    require('mysql');
 var app       =    express();
 var fs = require("fs");

 var pool      =    mysql.createPool({
     connectionLimit : 100, //sets how many can connect
     host     : 'localhost',
     user     : 'root',
     password : 'Sevilla223',
     database : 'NorthshoreWebstore',
     debug    :  false
 });

 function handle_database(req,res) {//handles user load

     pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }

         console.log('connected as id ' + connection.threadId);

         connection.query("select * from user",function(err,rows){
             connection.release();
             if(!err) {
                 res.json(rows);
             }
         });

         connection.on('error', function(err) {
               res.json({"code" : 100, "status" : "Error in connection database"});
               return;
         });
   });
 }

 app.get("/",function(req,res){-
         handle_database(req,res);
 });

 app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
 })

// app.listen(3000);

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

  })
