const IndexController = (request, response, next) => {
    const bookRepo = request.app.get('bookRepo');
    bookRepo.findAll()
        .then(books => response.render('index', {books: books || []}))
        .catch(next);
};

const AddController = (request, response) => {
    return response.render('add');
};

const SaveController = (request, response, next) => {
    const bookRepo = request.app.get('bookRepo');
    bookRepo.insert(request.body)
        .then(() => response.redirect('/'))
        .catch(next);
    
};

const EditController = (request, response, next) => {
    const bookRepo = request.app.get('bookRepo');
    bookRepo.findById(request.params['bookId'])
        .then(book => response.render('edit', {book: book}))
        .catch(next);
    
};

const UpdateController = (request, response, next) => {
    const bookRepo = request.app.get('bookRepo');
    bookRepo.update(request.body)
        .then(book => response.redirect('/'))
        .catch(next);
};

const DeleteController = (request, response, next) => {
    const bookRepo = request.app.get('bookRepo');
    bookRepo.remove(request.params['bookId'])
        .then(book => response.redirect('/'))
        .catch(next);
};

module.exports = {IndexController, AddController, SaveController, EditController, UpdateController, DeleteController};
