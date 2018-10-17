var express = require('express');
var router = express.Router();


router.get('/', require('./main').get);
router.post('/elevation', require('./elevation').post);

module.exports = router;
