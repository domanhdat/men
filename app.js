var express                = require('express');
var {routerApi, routerWeb} = require('./http');
var expressNunjucks        = require('express-nunjucks');
var compression            = require('compression');
var bodyParser             = require('body-parser');
const app                  = express();

app.set('views', __dirname + '/public');
expressNunjucks(app);
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(compression());
app.use('/api', routerApi);
app.use('/', routerWeb);

app.use(function (err) {
    console.log(err);
});

module.exports = app;