var ObjectId = require('mongodb').ObjectId;

class BookRepository {
    
    /**
     *
     * @param {Collection} bookCollection
     */
    constructor(bookCollection) {
        this.bookCollection = bookCollection;
    }
    
    /**
     *
     * @param id
     * @returns {Promise}
     */
    findById(id) {
        return this.bookCollection.find({_id: ObjectId(id)}).next();
    }
    
    /**
     *
     * @returns {Promise}
     */
    findAll() {
        return this.bookCollection.find({}).toArray();
    }
    
    /**
     *
     * @param book
     * @returns {Promise}
     */
    insert(book) {
        return this.bookCollection.insertOne(book);
    }
    
    /**
     *
     * @param book
     * @returns {Promise}
     */
    update(book) {
        const bookId = book._id;
        delete book._id;
        return this.bookCollection.updateOne({_id: ObjectId(bookId)}, {$set: book});
    }
    
    /**
     *
     * @param id
     * @returns {Promise}
     */
    remove(id) {
        return this.bookCollection.deleteOne({_id: ObjectId(id)});
    }
}

module.exports = BookRepository;