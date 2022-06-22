// Server imports
const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer')
const cors = require('cors')({
  origin: true
})

// GraphQL imports
const { createServer } = require('https');
const { dataStore } = require("./config/connection");
// const { makeExecutableSchema } = require('@graphql-tools/schema');
// const { typeDefs, resolvers } = require("./schemas");

// Configuration variables
const app = express();
const PORT = process.env.PORT || 3001;
// const schema = makeExecutableSchema({ typeDefs, resolvers });
const httpServer = createServer(app);

//Misc
require("dotenv").config();
// const updateEmail = require("./functions/updateEmail")

(async () => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.post("http://localhost:3000/odyssey/email", async(req,res) => {
    

    const updateEmail = await dataStore 
      .collection("emails")
      .get();
      console.log(req)
    try {
      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: process.env.EMAIL_USERNAME,
        subject: `${req.body.name} just requested a consultation!`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
      }

      return transporter.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', process.env.EMAIL_USERNAME)
        res.status(200).send({
          isEmailSend: true
        })
        return updateEmail(mailOptions)
      })
    }
    catch(err) {
      console.log(error)
    }
  })
  
  
  
  // In production use the build folder as the front end
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }
httpServer.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
})();
