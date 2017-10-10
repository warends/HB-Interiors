var nodemailer = require('nodemailer');

var generator = require('xoauth2').createXOAuth2Generator({
  user: 'willarends@gmail.com',
  clientId: process.env.GMAIL_HB_CLIENT_ID,
  clientSecret: process.env.GMAIL_HB_CLIENT_SECRET,
  refreshToken: '1/YRsAPIsuhFFBnJYbC7IhC4D_Vq4SfH6bUEw5B8z5KCJtLFk1JPQ_Q-3lP9Xx01Rg',
  accessToken: 'ya29.GlvfBDQtn0R1NBDTODV_ImHI_QNU93_0qSpNbhb-0KNWTd6fuxKURT8-Eg0gH6rnwFO_6X7ti1z3eXKVgYuUJ2vHm6M-eWBBhINMjtKlKct7wXntRhO9keGcVWI1'
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
    html: 'Message: ' + data.note + '<br><br><p>Email: ' + data.email + '<br>Name: ' + data.name + '</p>'
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
    var data = req.body;
    console.log(data.q1);
    console.log(data.q2);
    console.log(data.q3);
    console.log(data.q4);
    console.log(data.q5);
    var mailOptions = {
      from: data.email,
      to: 'haybagwell@gmail.com',
      subject: 'A customer filled out your questioniare!',
      html: 'Room to decorate first: ' + data.q1 + '<br>What images are you drawn to?: ' + data.q2 + '<br>Where do you shop for furniture?: ' + data.q3 + '<br>Where do you like?: ' + data.q4 + '<br>Where do you NOT like?: ' + data.q5 + '<br>Name: ' + data.name + '<br>Phone Number: ' + data.phone + '<br>Email: ' + data.email + '<br>Message: ' + data.note
    }
    console.log(mailOptions.html);
    transporter.sendMail(mailOptions, function(err, info){
      if(err){
        console.log(err);
        res.json({message: err.toString()});
      } else {
        res.json(data);
      }
    });
}
