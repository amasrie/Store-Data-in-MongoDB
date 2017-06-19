var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {
      // db gives access to the database
      if(err) throw err;
      var doc = {'firstName': process.argv[2], 'lastName': process.argv[3]};
      db.collection('docs').insert(doc, function(err, data){
        if(err) throw err;
        console.log(JSON.stringify(doc));
        db.close();        
      });
    });