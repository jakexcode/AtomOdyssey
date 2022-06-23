const { gql } = require("apollo-server-express");

const typeDefs = gql`

  

  type responseStatus {
    ok: Boolean
    error: String
  }



  type Query{
    _dummy: String
  }

  type Mutation {
    contactForm(email: String!, name: String!, message: String!): responseStatus
  }
`;

module.exports = typeDefs;