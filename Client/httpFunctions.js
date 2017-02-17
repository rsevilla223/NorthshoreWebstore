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
