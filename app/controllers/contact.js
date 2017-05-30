var nodemailer = require('nodemailer');

var generator = require('xoauth2').createXOAuth2Generator({
  user: 'haybagwell@gmail.com',
  clientId: process.env.GMAIL_HB_CLIENT_ID,
  clientSecret: process.env.GMAIL_HB_CLIENT_SECRET,
  refreshToken: '1/08jM4dR2KHIqU7ROSVJST5CVIq6PBwBgbTx-bLmWRP4',
  accessToken: 'ya29.GltZBBZd9XoA10_GpU9FJNXz5rw-qOkGJV6KV2USZQGk6n0cgKrqIfv9AGQ35U7Z0eIX75xElWkQNaP_86LXrsQx7Emq6n3wQKU2QxM8mgkGjABLOFJBSLigGGzz'
});

//listen for token updates (if refreshToken is set) you probably want to store these to a db
generator.on('token', function(token){
    console.log('New token for %s: %s', token.user, token.accessToken);
});

var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          xoauth2: generator
      },
      debug: true
});

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

exports.sendMail = function(req, res){
  var data = req.body;
  console.log(data);
  var mailOptions = {
    from: data.email,
    to: 'haybagwell@gmail.com',
    subject: 'Message from ' + data.name,
    html: 'Message:<br>' + data.note + '<br><br><p>Email: ' + data.email + '<br>Name: ' + data.name + '</p>'
  }
  transporter.sendMail(mailOptions, function(err, info){
    if(err){
      console.log(err);
      res.json({message: err.toString()});
    } else {
      res.json(data);
    }
  });

};

exports.sendQuestionaire = function(req, res) {
    console.log('Q form Sent!');
    var data = req.body;
    console.log(data);
}
