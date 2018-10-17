var express = require('express');
var router = express.Router();

// module.exports = function(){
//
//   router.get('/', require('./main').get);
//
//   return router;
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

module.exports = router;
