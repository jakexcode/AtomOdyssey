const nodemailer = require('nodemailer')
const cors = require('cors')({
  origin: true
})
const { dataStore } = require("../config/connection");
const transporter = require('../config/mailConnection')

// const updateEmail = async(req, res) => {

//       const mailOptions = {
//         from: req.body.email,
//         replyTo: req.body.email,
//         to: process.env.EMAIL_USERNAME,
//         subject: `${req.body.name} just requested a consultation!`,
//         text: req.body.message,
//         html: `<p>${req.body.message}</p>`,
//       }

//       return transporter.sendMail(mailOptions).then(() => {
//         console.log('New email sent to:', process.env.EMAIL_USERNAME)
//         res.status(200).send({
//           isEmailSend: true
//         })
//         return 
//       })
//     }
  
  
    

    // module.exports = updateEmail;
 