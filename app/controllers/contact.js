var nodemailer = require('nodemailer');

var generator = require('xoauth2').createXOAuth2Generator({
  user: 'haybagwell@gmail.com',
  clientId: process.env.GMAIL_HB_CLIENT_ID,
  clientSecret: process.env.GMAIL_HB_CLIENT_SECRET,
  refreshToken: '1/FaeQLA5VUruMcT8M1kOx7kl0ZTlf1bRxsrFANlZtDzmUMBsn1a7D8yl0sbF9dL4M',
  accessToken: 'ya29.GltbBI7g8DySBNJhK5WVa5c3A7D35B6DhxCmympeoOCMt0V5YoYwL4eNSMO-WEUIMP-3MxjydSbWFFDwMjliijA4wuUh3PPZBXHgeXA9nSQbeLRuugMWOdq3mxw8'
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
