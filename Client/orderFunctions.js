var createOrder = function(order) {
  postJSON("http://localhost:8000/orders/addOrder", order, function(err, data) {
    if (!err) {
      console.log("Creating order of 3 Skittles...");
    }
    else if (err == 500) {
      var order = {customer_id: 2, product_id: 8675306, product_quantity: 3};
      backoff(function(){createOrder(order)});
    }
    else {
      console.log("A business type error has occured. " + err);
    }
  });

  /*postJSON("http://localhost:8081/inventory/decrementInventory", order, function(err, data) {
    document.write("Decrementing quantity from Inventory table...<br>");
  });*/
}

var showOrders = function(user) {
  postJSON("http://localhost:8000/orders/getCustomerOrders", user, function(err, data) {
    console.log("fetching orders");
    if (!err) {
      for(var i = 0; i<data.length; i++) {
        document.write("<br>" + "Customer ID: " + data[i].customerId + "<br>" + "Order ID: " + data[i].orderId + "<br>" + "Product: "+ data[i].productId + "<br>" + "Quantity: " + data[i].quantity + "<br>");
      }
      console.log(data);
    }
    else if (err == 500) {
      var user = {customer_id: 2, first_name: "George", last_name: "Washington"};
      backoff(function(){showOrders(user)});
    }
    else {
      console.log("A business type error has occured. " + err);
    }
  });
}

var updateOrder = function(order) {
  postJSON("http://localhost:8000/orders/updateOrder", order, function(err, data) {
    if (!err) {
      console.log("<br>Updating order...<br>");
    }
    else if (err == 500) {
      var order = {order_id: 3, customer_id: 2, product_id: 8675306, product_quantity: 5};
      backoff(function(){updateOrder(order)});
    }
    else {
      console.log("A business type error has occured. " + err);
    }
  });
}

var deleteOrder = function(order) {
  deleteJSON("http://localhost:8000/orders/deleteOrder", order, function(err, data) {
    if (!err) {
      console.log("<br>Deleting order...<br>");
    }
    else if (err == 500) {
      var order = {order_id: 3, customer_id: 2, product_id: 8675306, product_quantity: 5};
      backoff(function(){deleteOrder(order)});
    }
    else {
      console.log("A business type error has occured. " + err);
    }
  });
}
