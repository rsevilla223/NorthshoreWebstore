var showAllProducts = function () {
  getJSON("http://localhost:8000/products/displayProducts", function(err, data) {


    if (!err) {
      console.log(data);
      document.write("<br><br>Displaying all products...<br>");
      for(var i=0; i<data.length; i++){
        document.write("<br>" + "Product ID: " + data[i].productId + "<br>" + "Product Name: " + data[i].productName + "<br>" + "Product Category: " + data[i].category + "<br>" + "Manufacturer: " + data[i].manufacturer + "<br>" + "Inventory: " + data[i].inventory + "<br>");
      }
    }

    else if (err == 500) {
      retry = false;
      exponentialBackoff(getAllUsers, 2, 200, function(result) {
        console.log("The result is ", result)
      });
    }

    else {
      console.log("An error has occured. " + err);
    }

  });
}
