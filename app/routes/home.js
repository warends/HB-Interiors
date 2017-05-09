var express = require('express'),
    router = express.Router(),
    contact = require('../controllers/contact');

  router.get('/partials/*', function(req, res){
      res.render('../../public/app/' + req.params[0]);
  });

  router.post('/contact-form', contact.sendMail);

  router.post('/questionaire-form', contact.sendQuestionaire);

module.exports = router;
