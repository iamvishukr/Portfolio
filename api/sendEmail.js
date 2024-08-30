const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    console.log(req.body);
    const { user_email , user_name , message  } = req.body;

    const msg = `Email: ${user_email} | User Name: ${user_name} | Message: ${message}`;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,  // your email password
        },
    });

    let mailOptions = {
        from: 'vishals.dustbin@gmail.com',
        to: 'iamvishukr@gmail.com',
        subject: 'Portfolio Contact',
        text: msg,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
