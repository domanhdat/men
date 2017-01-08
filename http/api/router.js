const express           = require('express');
const router            = express.Router();
const {IndexController} = require('./controller');

router.get('/', IndexController.IndexController);

module.exports = router;
