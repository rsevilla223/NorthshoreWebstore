function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var methods = {

  errorGenerator:  function(res) {
    errorNumber = getRandomInt(0,10);
    switch (errorNumber) {
      case 1:
        res.status(500).send("Oh uh, something went wrong. Please try again.");
        return true;
        //break;

      default:
        break;
    }
  }
};

module.exports = methods;
