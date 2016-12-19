var Promise             = require('bluebird');
var mongodb             = require('./share/mongodb');
var bookServiceProvider = require('./app/book/book-service-provider');

const boot = (app) => {
    return Promise.resolve(app)
        .then(mongodb)
        .then(bookServiceProvider)
        .catch(error => console.log(error));
};

module.exports = boot;