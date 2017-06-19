var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err) return err;
      db.collection('parrots').find({'age': { $gt: parseInt(process.argv[2]) }})
        .toArray(function(err, documents) {
          if(err) return err;
          console.log(documents)
          db.close();
        });
    });