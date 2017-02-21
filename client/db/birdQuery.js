

var MongoClient = require('mongodb').MongoClient;

// filmquery class uses a url
var BirdQuery = function() {
this.url = 'mongodb://localhost:27017/birds_site';

};

BirdQuery.prototype = {
  all: function(onQueryFinished){
    //connecting to dabase at url and callback to a function
    MongoClient.connect(this.url, function(err,db){
      //check to see if we are connected to db
      if (db) {
        //console.log("Connected");
          //we are connected so get the birds into collection variable
          var collection = db.collection('birds');
          //collection.find to display all , need to convert to array, again with a function callback as .toArray can take a while
          collection.find().toArray(function(err,docs){
            //once the .toArray has completed then onQueryFinished is called , ie all is sent back
            onQueryFinished(docs);
          });
        }
    });
  }

}

module.exports = BirdQuery;