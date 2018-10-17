var express = require('express');
var router = express.Router();


router.get('/', require('./main').get);
//router.post('/elevation', require('./elevation').post);

// API
router.post('/api/v1/elevation', require('./api/v1/elevation').post);


module.exports = router;
