var express = require('express'),
    router = express.Router();

  router.get('/partials/*', function(req, res){
      res.render('../../public/app/' + req.params[0]);
  });

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index');
  });

module.exports = router;
