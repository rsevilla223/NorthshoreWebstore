function backoff(func) {
  if(func()) {
    console.log("all good");
  }


  var waitTime = 3000;
    console.log("An error has occured, retrying in " + waitTime/1000 + " seconds.");
    setTimeout(function(){
      func();
      console.log("success");
    //do what you need here
  }, 3000);
}

function exponentialBackoff(toTry, max, delay, callback) {
    console.log("This should be true: " + toTry());
    console.log("An error has occured, retrying in " + delay/1000 + " seconds.");
    var result = toTry();

    if (result) {
        callback(result);
    } else {
        if (max > 0) {
            setTimeout(function() {
                exponentialBackoff(toTry, --max, delay * 2, callback);
            }, delay);

        } else {
             console.log('Could not connect. Abandoning retry.');
        }
    }
}
