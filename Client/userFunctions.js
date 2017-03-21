//User Functions

var getAllUsers = function() {

  getJSON("http://localhost:8081/users/displayUsers", function (err, data) {
    if (!err) {
      //console.log(data);
      document.write("Users: <br>");
      for(var i=0; i<data.length; i++){
        document.write("<br>Name: " + data[i].firstname + ' ' + data[i].lastname);
      }
    }
    else if (err == 500) {
      retry = false;
      exponentialBackoff(getAllUsers, 2, 200, function(result) {
        console.log("The result is ", result)
      });
    }
    else {
      console.log("A business type error has occured. " + err);
    }
  });
  return true;
}

var addUser = function(user) {
  postJSON("http://localhost:8081/users/addUser", user, function(err, data) {
    if (!err){
      console.log("Adding new user...");
    }
    else if (err == 500) {
      var user = {first_name: "Alexander", last_name: "Hamilton"};
      backoff(function(){addUser(user)});
    }
    else {
      console.log("A business type error has occured. " + err);
    }

  });
  return true;
}

var updateUser = function(user) {
  postJSON("http://localhost:8081/users/updateUser", user, function(err, data) {
    if (!err){
      console.log("Updating user...");
    }
    else if (err == 500) {
      var user = {id: getRandomInt(1,1000), first_name: "Alexander", last_name: "Graham Bell"};
      backoff(function(){updateUser(user)});
      /*exponentialBackoff(function(){updateUser( user )}, 2, 200, function(result) {
        console.log("The result is ", result)
      });*/
    }
    else {
      console.log("A business type error has occured. " + err);
    }
  });
}

var deleteUser = function(user) {
  deleteJSON("http://localhost:8081/users/deleteUser", user, function(err, data) {
    if (!err){
      console.log("Deleting user...");
    }
    else if (err == 500) {
      var user = {id: 5, first_name: "Alexander", last_name: "Graham Bell"};
      backoff(function(){deleteUser(user)});
      /*exponentialBackoff(function(){deleteUser( user )}, 2, 200, function(result) {
        console.log("The result is ", result)
      });*/
    }
    else {
      console.log("A business type error has occured. " + err);
    }
  });
  return true;
}
