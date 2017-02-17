

var getJSON = function(url, callback) {//just setting up the logic for making API requests
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();//fix cors issue
};

var postJSON = function(url, data, callback) {//just setting up the logic for making API requests
    var xhr = new XMLHttpRequest();
    xhr.open("post", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send(JSON.stringify(data));//fix cors issue
};

var updateJSON = function(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("update", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send(JSON.stringify(data));
};

var deleteJSON = function(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("delete", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send(JSON.stringify(data));
};

var user = {id: 12, first_name: "Sev", last_name: "Sevilla"};
var juser = JSON.stringify(user);
console.log(JSON.stringify(user));

//User Functions

var getAllUsers = function() {
  getJSON("http://127.0.0.1:8081/users/displayUsers", function(err, data) {
    console.log(data);
    document.write("Users: ");
    for(var i=0; i<data.length; i++){
      document.write(data[i].firstname + ' ' + data[i].lastname + ',' + '\n');
    }
  });
}

var addUser = function(user) {
  document.write("Adding new user...")
  postJSON("http://127.0.0.1:8081/users/addUser", user, function(err, data) {
    console.log(data);
  });
}

var updateUser = function(user) {
  postJSON("http://127.0.0.1:8081/users/updateUser", user, function(err, data) {
    console.log(data);
  });
}

var deleteUser = function(user) {
  deleteJSON("http://127.0.0.1:8081/users/deleteUser", user, function(err, data) {
    console.log(data);
  });
}

getAllUsers();

//Product functions

var showAllProducts = function () {
  getJSON("http://127.0.0.1:8081/products/displayProducts", function(err, data) {
    document.write("<br><br>Displaying all products...<br>");
    for(var i=0; i<data.length; i++){
      document.write("<br>" + "Product ID: " + data[i].productId + "<br>" + "Product Name: " + data[i].productName + "<br>" + "Product Category: " + data[i].category + "<br>" + "Manufacturer: " + data[i].manufacturer + "<br>" + "Inventory: " + data[i].inventory + "<br>");
    }
  });
}

showAllProducts();

//Order Functions

var order = {customer_id: 1, product_id: 271812881, product_quantity: 7};

var createOrder = function(order) {
  postJSON("http://127.0.0.1:8081/orders/addOrder", order, function(err, data) {
    document.write("<br><br>Creating order of 7 Skittles...<br>");
  });
  postJSON("http://127.0.0.1:8081/inventory/decrementInventory", order, function(err, data) {
    document.write("Decrementing quantity from Inventory table...<br>");
  });
}


createOrder(order);

//console.log("1. Displaying all users...");
//document.write("HELLLLLLLLO");



console.log("testing...");

//First we will create a user

var user = {firstname: "Ryan", lastname: "Sevilla"};

//User methods

var addUser = function(user) {


}
