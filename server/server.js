// Server imports
const express = require("express");
const path = require("path");

// GraphQL imports
const { createServer } = require('http');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { typeDefs, resolvers } = require("./schemas");

// Configuration variables
const app = express();
const PORT = process.env.PORT || 3001;
const schema = makeExecutableSchema({ typeDefs, resolvers });
const httpServer = createServer(app);

//Misc
require("dotenv").config();

(async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  
  
  // In production use the build folder as the front end
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }
httpServer.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});

})();
