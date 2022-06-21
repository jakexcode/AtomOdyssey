var nodemailer = require('nodemailer');
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = transporter;