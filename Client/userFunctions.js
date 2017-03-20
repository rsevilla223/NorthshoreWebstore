//User Functions

var getAllUsers = function() {
  getJSON("http://localhost:8081/users/displayUsers", function(err, data) {
    if (!err) {
      console.log(data);
      document.write("Users: <br>");
      for(var i=0; i<data.length; i++){
        document.write("<br>Name: " + data[i].firstname + ' ' + data[i].lastname);
      }
    }
    else {

    }

  });
}

var addUser = function(user) {
  postJSON("http://localhost:8081/users/addUser", user, function(err, data) {
    document.write("Adding new user...");
    console.log(data);
  });
}

var updateUser = function(user) {
  postJSON("http://localhost:8081/users/updateUser", user, function(err, data) {
    console.log(data);
  });
}

var deleteUser = function(user) {
  deleteJSON("http://localhost:8081/users/deleteUser", user, function(err, data) {
    console.log(data);
  });
}
