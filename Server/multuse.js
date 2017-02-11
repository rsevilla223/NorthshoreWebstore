 var express   =    require("express");
 var mysql     =    require("mysql");
 var bodyParser =   require("body-parser");
 var fs        =    require("fs");
 var app       =    express();

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());



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

 app.post('/addUser', function(req,res) {
   var firstName = req.body.first_name;
   var lastName = req.body.last_name;

   console.log(firstName + " " + lastName);

   var params = {firstname: firstName, lastname: lastName};
   var query = pool.query('INSERT INTO Customers SET ?', params, function(err, result) {
     if (!err)
       console.log('The solution is: ', result);
     else
       console.log('Error while performing Query.');

   });
   res.end("User "+ firstName + ' ' + lastName + " added");
 });

 app.get('/displayUsers', function(req,res){
   var query = pool.query('SELECT * FROM Customers', function(err, rows, fields) {
     if (!err)
       console.log('Users: ', rows);
       //rows[2].id;

     else
       console.log('Error while performing Query.');

     res.end("");
   });


   //res.end("Request working");
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
