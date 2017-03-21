function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var i=0; i<1000; i++) {

  errorNumber = getRandomInt(1,9);
  switch (errorNumber) {
    case 1:
      try {
        getAllUsers();
      }
      catch(ex) {
        document.write(ex);
      }

      break;
    case 2:
      showAllProducts();
      //console.log("Try number "+ i);
    case 3:
      var user = {first_name: "Alexander", last_name: "Hamilton"};
      addUser(user);
    case 4:
      var user = {id: 5, first_name: "Alexander", last_name: "Graham Bell"};
      updateUser(user);
    case 5:
      var user = {id: 5, first_name: "Alexander", last_name: "Graham Bell"};
      deleteUser(user);
    case 6:
      var order = {customer_id: 2, product_id: 8675306, product_quantity: 3};
      createOrder(order);
    case 7:
      var user = {customer_id: 2, first_name: "George", last_name: "Washington"};
      showOrders(user);
    case 8:
      var order = {order_id: 3, customer_id: 2, product_id: 8675306, product_quantity: 5};
      updateOrder(order);
    case 9:
      var order = {order_id: 3, customer_id: 2, product_id: 8675306, product_quantity: 5};
      deleteOrder(order);
  }

}
