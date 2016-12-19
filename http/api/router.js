var express           = require('express');
var router            = express.Router();
var {IndexController} = require('./controller');

router.get('/', IndexController.IndexController);

module.exports = router;
