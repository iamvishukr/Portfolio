const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const { user_email, user_name, message } = req.body;

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

module.exports = router;
