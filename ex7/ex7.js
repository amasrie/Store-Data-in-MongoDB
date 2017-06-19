var mongo = require('mongodb').MongoClient
    mongo.connect("mongodb://localhost:27017/" + process.argv[2], function(err, db) {
      // db gives access to the database
      if(err) throw err;
      db.collection(process.argv[3]).remove({ _id: process.argv[4] }, function(err, data){
        if(err) throw err;
        db.close();        
      });
    });