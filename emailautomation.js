// mailer_exp9.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', 
        pass: 'your_app_password' // Use a 16-character Google App Password here
    }
});

const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'receiver_email@example.com',
    subject: 'Automated Node.js Email',
    text: 'This email was triggered automatically by a Node.js script during my lab exam!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});