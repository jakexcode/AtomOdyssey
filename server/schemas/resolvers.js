const { fromGraphQLError } = require("apollo-server-errors");
const { gql } = require("apollo-server-express");
const transporter = require("../config/mailConnection")
const { dataStore } = require("../config/connection");

require("dotenv").config();


const resolvers = {
  Query: {
    _dummy: async(_) =>  {
      return ""
    }
  },
  Mutation: { 
    contactForm: async(_,{name, email, message}) => {
      console.log(name)
      console.log(email)
      console.log(message)

      try {


      const emailRef = await dataStore 
            .collection("emails")
            .doc()
    
      var mailOptions = {
        from: email,
        to: process.env.EMAIL_USERNAME,
        subject: `${name} has requested a consultation!`,
        html: `
          ${message}
        `
      }
      await emailRef.set(mailOptions)
    }catch (err) {
      console.log(err)
    }


      try {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        } 
      })
    } catch(err) {
      console.log(err)
    }
      return {ok:true}
    }
  }
}

module.exports = resolvers;