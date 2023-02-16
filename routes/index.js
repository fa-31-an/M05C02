var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);
router.get('/detalle/:id', controller.detail);

module.exports = router;
