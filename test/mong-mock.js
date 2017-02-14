var mongoose = require("mongoose");

// this method is propagated from node-mongodb-native
mongoose.Collection.prototype.insert = function(docs, options, callback) {
    // this is what the API would do if the save succeeds!
    return callback(null, docs);
};

mongoose.Collection.prototype.remove = function(ns, ops, callback) {
    return callback(null)
}
mongoose.Promise = global.Promise;
module.exports = mongoose;