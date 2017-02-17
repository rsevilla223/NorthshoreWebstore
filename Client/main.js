document.write("Beginning Node Service Test...");

setTimeout(function(){
  document.write("Testing Read function of all users from database...<br><br>");
  getAllUsers();
},1000);

setTimeout(function(){
  var prompt = "Testing create function of new user into database...";
  document.write("<br><br>"+ prompt.bold()+"<br><br>");
  var user = {first_name: "Alexander", last_name: "Hamilton"};
  addUser(user);
},2000);

setTimeout(function(){
  document.write("<br><br>Confirming insertion into database by reading all users again...<br><br>");
  getAllUsers();
},3000);


setTimeout(function(){
  document.write("<br><br>Testing user updating by updating name of last user inserted into database...<br><br>");
},4000);

setTimeout(function(){
  var user = {id: 5, first_name: "Alexander", last_name: "Graham Bell"};
  document.write("<br><br>Confirming user was updated by reading all users again...<br><br>");
  updateUser(user);
},5000);

setTimeout(function(){
  getAllUsers();
},6000);

setTimeout(function(){
  document.write("<br><br>Testing user deletion by deleting last user inserted into database...<br><br>");
},7000);

setTimeout(function(){
  var user = {id: 5, first_name: "Alexander", last_name: "Graham Bell"};
  document.write("<br><br>Confirming user was deleted by reading all users again...<br><br>");
  deleteUser(user);
},8000);

setTimeout(function(){
  getAllUsers();
},9000);

setTimeout(function(){
  document.write("<br><br>User test complete. Now starting product test. Displaying all products...<br><br>");
},10000);

setTimeout(function(){
  showAllProducts();
},11000);

setTimeout(function(){
  document.write("<br><br>Product test complete. Now starting order test. Displaying all orders from customerId 2...<br><br>");
},12000);

setTimeout(function(){
  var user = {customer_id: 2, first_name: "George", last_name: "Washington"};
  showOrders(user);
},13000);

setTimeout(function(){
  document.write("<br><br>Adding new order for customer 2...<br><br>");
},14000);

setTimeout(function(){
  var order = {customer_id: 2, product_id: 8675306, product_quantity: 3};
  createOrder(order);
},15000);

setTimeout(function(){
  document.write("<br><br>Confirming order was added by listing user 2's orders again...<br><br>");
},16000);

setTimeout(function(){
  var user = {customer_id: 2, first_name: "George", last_name: "Washington"};
  showOrders(user);
},17000);

setTimeout(function(){
  document.write("<br><br>Testing order update by updating quantity of order 3...<br><br>");
},18000);

setTimeout(function(){
  var order = {order_id: 3, customer_id: 2, product_id: 8675306, product_quantity: 5};
  updateOrder(order);
},19000);

setTimeout(function(){
  document.write("<br><br>Confirming order was updated by listing user 2's orders again...<br><br>");
},20000);

setTimeout(function(){
  var user = {customer_id: 2, first_name: "George", last_name: "Washington"};
  showOrders(user);
},21000);

setTimeout(function(){
  document.write("<br><br>Testing deletion by deleting order 3...<br><br>");
},22000);

setTimeout(function(){
  var order = {order_id: 3, customer_id: 2, product_id: 8675306, product_quantity: 5};
  deleteOrder(order);
},23000);

setTimeout(function(){
  document.write("<br><br>Confirming order was deleted by listing user 2's orders again...<br><br>");
},24000);

setTimeout(function(){
  var user = {customer_id: 2, first_name: "George", last_name: "Washington"};
  showOrders(user);
},25000);

setTimeout(function(){
  document.write("<br><br>Node Service and Client test complete.<br><br>");
},26000);
