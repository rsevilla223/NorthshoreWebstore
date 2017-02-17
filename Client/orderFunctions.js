var createOrder = function(order) {
  postJSON("http://127.0.0.1:8081/orders/addOrder", order, function(err, data) {
    document.write("<br><br>Creating order of 3 Skittles...<br>");
  });
  postJSON("http://127.0.0.1:8081/inventory/decrementInventory", order, function(err, data) {
    document.write("Decrementing quantity from Inventory table...<br>");
  });
}

var showOrders = function(user) {
  postJSON("http://127.0.0.1:8081/orders/getCustomerOrders", user, function(err, data) {
    for(var i = 0; i<data.length; i++) {
      document.write("<br>" + "Customer ID: " + data[i].customerId + "<br>" + "Order ID: " + data[i].orderId + "<br>" + "Product: "+ data[i].productId + "<br>" + "Quantity: " + data[i].quantity + "<br>");
    }
    console.log(data);
  });
}

var updateOrder = function(order) {
  postJSON("http://127.0.0.1:8081/orders/updateOrder", order, function(err, data) {
    document.write("<br>Updating order...<br>");
  });
}

var deleteOrder = function(order) {
  deleteJSON("http://127.0.0.1:8081/orders/deleteOrder", order, function(err, data) {
    document.write("<br>Deleting order...<br>");
  });
}
