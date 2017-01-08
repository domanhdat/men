var app  = require('./app');
var boot = require('./boot');

boot(app).then((app) => {
    console.log('app boot success');
    app.listen(3000, () => console.log('app listen port 3000'))
});
