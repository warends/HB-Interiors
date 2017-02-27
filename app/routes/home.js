var express = require('express'),
    router = express.Router();

  router.get('/partials/*', function(req, res){
      res.render('../../public/app/' + req.params[0]);
  });

module.exports = router;
