var express = require('express');
var router = express.Router();


router.get('/', require('./main').get);
router.get('/elevation', require('./elevation').get);

module.exports = router;
