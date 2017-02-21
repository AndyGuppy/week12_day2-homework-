var Bird = require('./bird');
var Note = require('./note');



var Birds = function(){


}

Birds.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    console.log("Making a request to: - " + url)
    request.send();
  },

  all: function(callback) {
    this.makeRequest('http://localhost:3000/api/birds', function(){
      if(this.status !== 200) return;
        var jsonString = this.responseText;
        var result = JSON.parse(jsonString);

        console.log(result);
        callback(result);

    });
  }
}


module.exports = Birds;
