var showAllProducts = function () {
  getJSON("http://127.0.0.1:8081/products/displayProducts", function(err, data) {
    document.write("<br><br>Displaying all products...<br>");
    for(var i=0; i<data.length; i++){
      document.write("<br>" + "Product ID: " + data[i].productId + "<br>" + "Product Name: " + data[i].productName + "<br>" + "Product Category: " + data[i].category + "<br>" + "Manufacturer: " + data[i].manufacturer + "<br>" + "Inventory: " + data[i].inventory + "<br>");
    }
  });
}
