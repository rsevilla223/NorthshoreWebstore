//Dependencies
 var express   =    require("express");
 var mysql     =    require("mysql");
 var bodyParser =   require("body-parser");
 var fs        =    require("fs");
 var cors     =     require("cors");
 var chaos    =     require("./chaos.js");

//Express
 var app       =    express();
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 app.use(cors());

//MySQL Configuration
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

function errorGenerator() {
  switch (errorNumber) {
    case 1:

      break;

    default:
  }
}

 //Routes
 //app.use('/api', require('./routes/users.js'));


 app.get("/",function(req,res){-
         handle_database(req,res);
 });

 app.post('/users/addUser', function(req,res) {


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

 app.post('/users/updateUser', function(req, res) {
   var firstName = req.body.first_name;
   var lastName = req.body.last_name;
   var customerId = req.body.id;

   var query = pool.query('UPDATE Customers SET firstname = ?, lastname = ? WHERE id = ?', [firstName, lastName, customerId], function(err, result) {
     if (!err)
       console.log('The solution is: ', result);
     else
       console.log('Error while performing Query.');

     });
     res.end("User id "+ customerId + " updated.");
 });

 app.get('/users/testDisplayUsers2', function(req, res){

   if(chaos.errorGenerator(res)) return;

   var query = pool.query('SELECT * FROM Customers', function(err, rows, fields) {
     if (!err) {
       console.log('Users: ', rows);
       res.json(rows);
     }
       //rows[2].id;
     else
       console.log('Error while performing Query.');
   });
  });

 app.get('/users/testDisplayUsers', function(req, res){
   errorNumber = getRandomInt(0,10);
   switch (errorNumber) {
     case 1:
      res.status(404).send("Oh uh, something went wrong. Please try again.");
       break;

     default:
     var query = pool.query('SELECT * FROM Customers', function(err, rows, fields) {
       if (!err) {
         console.log('Users: ', rows);
         res.json(rows);
       }
         //rows[2].id;
       else
         console.log('Error while performing Query.');
     });
   }

  });

 app.get('/users/displayUsers', function(req, res){
   var query = pool.query('SELECT * FROM Customers', function(err, rows, fields) {
     if (!err) {
       console.log('Users: ', rows);
       res.json(rows);
     }
       //rows[2].id;
     else
       console.log('Error while performing Query.');
   });
  });

app.delete('/users/deleteUser', function(req, res) {
  console.log("testing deleteUser");

  var customerId = req.body.id;

  var query = pool.query('DELETE FROM Customers WHERE id = ?', customerId, function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');
  });
  res.end("Deleted user " + customerId);
});

//Product Routes

app.get('/products/displayProducts', function(req, res){
  if(chaos.errorGenerator(res)) return;
  var query = pool.query('select products.*, inventory.inventory FROM products LEFT JOIN inventory ON products.productId = inventory.productId', function(err, rows, fields) {
    if (!err) {
      console.log('Products: ', rows);
      res.json(rows);
    }
      //rows[2].id;
    else
      console.log('Error while performing Query.');
  });
  //res.end("Done.");
 });

 app.post('/products/findProduct', function(req, res){
   if(chaos.errorGenerator(res)) return;
   product_id = req.body.product_id;
   //var query = pool.query('SELECT * FROM Products', function(err, rows, fields) {
   var query = pool.query('select products.*, inventory.inventory FROM products LEFT JOIN inventory ON products.productId = inventory.productId WHERE products.productId = ?', product_id, function(err, rows, fields) {
     if (!err) {
       console.log('Product: ', rows);
       res.json(rows);
     }
       //rows[2].id;
     else
       console.log('Error while performing Query.');
   });
   //res.end("Done.");
  });

app.post('/products/addProduct', function(req,res) {
  if(chaos.errorGenerator(res)) return;
  var product_id = req.body.product_id;
  var product_name = req.body.product_name;
  var product_category = req.body.category;
  var product_manufacturer = req.body.manufacturer;

  var params = {productId: product_id, productName: product_name, category: product_category, manufacturer: product_manufacturer};
  var query = pool.query('INSERT INTO Products SET ?', params, function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');

  });
  res.end("Product " + product_name + " added");
});

app.post('/products/updateProduct', function(req, res) {
  if(chaos.errorGenerator(res)) return;
  var product_id = req.body.product_id;
  var product_name = req.body.product_name;
  var product_category = req.body.category;
  var product_manufacturer = req.body.manufacturer;

  var query = pool.query('UPDATE Products SET productName = ?, category = ?, manufacturer = ? WHERE productId = ?', [product_name, product_category, product_manufacturer, product_id], function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');

    });
    res.end("Product "+ product_name + " updated.");
});

app.delete('/products/deleteProduct', function(req, res) {
  if(chaos.errorGenerator(res)) return;

  var product_id = req.body.product_id;

  var query = pool.query('DELETE FROM Products WHERE productId = ?', product_id, function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');
  });
  res.end("Deleted product " + product_id);
});

//Inventory Routes

app.post('/inventory/addInventory', function(req,res) {
  if(chaos.errorGenerator(res)) return;
  var product_id = req.body.product_id;
  var product_inventory = req.body.inventory;

  var params = {productId: product_id, inventory: product_inventory};

  var query = pool.query('INSERT INTO Inventory SET ?', params, function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');

  });
  res.end("Product " + product_id + " inventory set to " + product_inventory);
});

app.post('/inventory/updateInventory', function(req, res) {
  if(chaos.errorGenerator(res)) return;
  var product_id = req.body.product_id;
  var product_inventory = req.body.inventory;

  var query = pool.query('UPDATE Inventory SET inventory = ? WHERE productId = ?', [product_inventory, product_id], function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');

    });
    res.end("Product "+ product_id + " updated inventory to " + product_inventory);
});

app.post('/inventory/decrementInventory', function(req, res) {
  if(chaos.errorGenerator(res)) return;
  var product_id = req.body.product_id;
  var decrement = req.body.product_quantity;

  var query = pool.query('UPDATE Inventory SET inventory = GREATEST(0, inventory - ?) WHERE productId = ?', [decrement, product_id], function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');

    });
    res.end("Product "+ product_id + " updated inventory.");
});

app.delete('/inventory/deleteInventory', function(req, res) {
  if(chaos.errorGenerator(res)) return;

  var product_id = req.body.product_id;

  var query = pool.query('DELETE FROM Inventory WHERE productId = ?', product_id, function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');
  });
  res.end("Deleted product inventory " + product_id);
});

//Order Routes

app.post('/orders/getCustomerOrders', function(req, res){
  if(chaos.errorGenerator(res)) return;
  var customer_id = req.body.customer_id;
  //var query = pool.query('SELECT * FROM Products', function(err, rows, fields) {
  var query = pool.query('SELECT * from Orders WHERE customerId = ?', customer_id, function(err, rows, fields) {
    if (!err) {
      console.log('Customer orders: ', rows);
      res.json(rows);
    }
      //rows[2].id;
    else
      console.log('Error while performing Query.');
  });
  //res.end("Done.");
 });

app.post('/orders/addOrder', function(req,res) {
  if(chaos.errorGenerator(res)) return;
  //var order_id = req.body.order_id;
  var customer_id = req.body.customer_id;
  var product_id = req.body.product_id;
  var product_quantity = req.body.product_quantity;

  var params = {customerId: customer_id, productId: product_id, quantity: product_quantity};
  var query = pool.query('INSERT INTO Orders SET ?', params, function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');

  });
  res.end("Order added");
});

app.post('/orders/updateOrder', function(req, res) {
  if(chaos.errorGenerator(res)) return;
  var order_id = req.body.order_id;
  var customer_id = req.body.customer_id;
  var product_id = req.body.product_id;
  var product_quantity = req.body.product_quantity;

  var query = pool.query('UPDATE Orders SET customerId = ?, productId = ?, quantity = ? WHERE orderId = ?', [customer_id, product_id, product_quantity, order_id], function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');

    });
    res.end("Order "+ order_id + " updated.");
});

app.delete('/orders/deleteOrder', function(req, res) {
  if(chaos.errorGenerator(res)) return;

  var order_id = req.body.order_id;

  var query = pool.query('DELETE FROM Orders WHERE orderId = ?', order_id, function(err, result) {
    if (!err)
      console.log('The solution is: ', result);
    else
      console.log('Error while performing Query.');
  });
  res.end("Deleted order " + order_id);
});

   //res.end("Request working");


 app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
 });

//Start Server

// app.listen(3000);

  var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

  })
