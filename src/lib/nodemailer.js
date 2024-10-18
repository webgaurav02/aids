const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve('./views/'), 
    defaultLayout: false, 
  },
  viewPath: path.resolve('./views/'), 
  extName: '.handlebars', 
};

transporter.use('compile', hbs(handlebarOptions));

async function sendEmail(context) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVE,
    subject: `NEW SUBMISSION FROM MACS WEBSITE: ${context.firstname} ${context.lastname}`,
    template: 'contact', // Handlebars template
    context: context, // Data to render in the template
    // attachments: [
    //   {
    //     filename: 'logo_black.png',
    //     path: 'https://tycindia.com/logo/logo_black.png', // You can also use a local path
    //     cid: 'logo', // Content ID reference to use in the template
    //   },
    // ],
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };
