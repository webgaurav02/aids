import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

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
    template: 'contact',
    context: context,
  };

  return transporter.sendMail(mailOptions);
}

export async function POST(req, res) {
  try {
    const context = await req.json();
    await sendEmail(context);
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Email failed to send' }), { status: 500 });
  }
}
