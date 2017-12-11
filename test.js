
var couchbase = require('couchbase');
var myCluster = new couchbase.Cluster("couchbase://couchbasedb");
//myCluster.authenticate('Administrator', 'password');
var myBucket=myCluster.openBucket("travel-sample", "76a7722db3897a19ec4bc1ac9ae4d60e");
var db = myBucket;

var N1qlQuery = require("couchbase").N1qlQuery;

var query = N1qlQuery.fromString(
    "SELECT users.* " +
    "FROM `travel-sample` AS users " +
    "WHERE id = 10"
);

db.query(query, function(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }

});
