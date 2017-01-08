const Promise             = require('bluebird');
const mongodb             = require('./share/mongodb');
const bookServiceProvider = require('./app/book/book-service-provider');

/**
 *
 * @param app
 * @returns {Promise}
 */
const boot = (app) => {
    return Promise.resolve(app)
        .then(mongodb)
        .then(bookServiceProvider)
        .catch(error => console.log(error));
};

module.exports = boot;