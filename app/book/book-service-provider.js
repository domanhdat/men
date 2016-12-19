var BookRepository = require('./book-repository');

const BookServiceProvider = (app) => {
    let bookRepository = new BookRepository(app.get('mongodb').collection('books'));
    app.set('bookRepo', bookRepository);
    return app;
};

module.exports = BookServiceProvider;
