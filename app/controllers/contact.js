var nodemailer = require('nodemailer');

var generator = require('xoauth2').createXOAuth2Generator({
  user: 'haybagwell@gmail.com',
  clientId: process.env.GMAIL_HB_CLIENT_ID,
  clientSecret: process.env.GMAIL_HB_SECRET,
  refreshToken: '1/QjpliYhZzIvA3tJ5Dsid2kKVgXu37e1KXeuLa3lUkAk',
  accessToken: 'ya29.Gls-BO2ZnJFyBtJMJnsnVF8AQygLAw6VYrzy729amWQHozoM3XwHYUh4NZCcdrWfysENARJx6fOqLMGJPcPgPtsFO5s4qYI9q2k-ZtsppVYiQ4XJq_wOEiPNZVOw'
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

// transporter.sendMail({
//   from: 'sender@example.com',
//   to: 'haybagwell@gmail.com',
//   subject: 'Test',
//   text: 'This email working???',
// });

exports.sendMail = function(req, res){
    console.log('mail sent!');
  // var data = req.body;
  // var mailOptions = {
  //   from: data.contactEmail,
  //   to: 'willarends@gmail.com',
  //   subject: 'Message from ' + data.contactName,
  //   //text: data.contactMessage,
  //   html: data.contactMessage + '<br><br><p>Email: ' + data.contactEmail + '<br>Company: ' + data.contactCompany + '<br>Name: ' + data.contactName + '</p>'
  // }
  // transporter.sendMail(mailOptions, function(err, info){
  //   if(err){
  //     console.log(err);
  //     res.json({message: err.toString()});
  //   } else {
  //     console.log('Message Sent: ' + info.response);
  //     res.json(data);
  //   }
  // });

};
