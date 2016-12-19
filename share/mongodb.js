var Promise     = require('bluebird');
var MongoClient = require('mongodb').MongoClient;

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://localhost:27017/book', (err, mongodb) => {
            if (err) {
                return reject(err);
            }
            app.set('mongodb', mongodb);
            return resolve(app);
        })
    })
};
