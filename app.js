const express                = require('express');
const {routerApi, routerWeb} = require('./http');
const expressNunjucks        = require('express-nunjucks');
const compression            = require('compression');
const bodyParser             = require('body-parser');
const app                    = express();

app.set('views', __dirname + '/public');
expressNunjucks(app);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(compression());
app.use('/api', routerApi);
app.use('/', routerWeb);

module.exports = app;