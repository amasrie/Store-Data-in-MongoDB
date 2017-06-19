var mongo = require('mongodb').MongoClient
    mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
      // db gives access to the database
      if(err) throw err;
      var match = { $match: { size: process.argv[2] } };
      var group = { $group: { _id: 'avg', avg: {$avg: '$price' }} };
      db.collection('prices').aggregate([match, group ]).toArray(function(err, results) {
        if(err) throw err;
        if (!results.length) {
          throw new Error('No results found');
        }
        console.log(Number(results[0].avg).toFixed(2));
        db.close();        
      });
    });