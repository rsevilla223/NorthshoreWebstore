function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var i=0; i<100; i++) {

  errorNumber = getRandomInt(1,2);
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
  }

}
