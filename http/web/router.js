var express           = require('express');
var router            = express.Router();
var {IndexController} = require('./controller');

router.get('/', IndexController.IndexController);
router.get('/add', IndexController.AddController);
router.post('/add', IndexController.SaveController);
router.get('/edit/:bookId', IndexController.EditController);
router.post('/update', IndexController.UpdateController);
router.get('/delete/:bookId', IndexController.DeleteController);

module.exports = router;
