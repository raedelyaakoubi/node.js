var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rouda20lboy@gmail.com',
    pass: '1234000'
  }
});

var mailOptions = {
  from: 'rouda20lboy@gmail.com',
  to: 'rouda20lboy@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'learn fast'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});