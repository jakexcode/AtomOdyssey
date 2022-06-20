

const express = require("express");
const path = require("path");

const { createServer } = require('http');
const { makeExecutableSchema } = require('@graphql-tools/schema');

require("dotenv").config();
const { typeDefs, resolvers } = require("./schemas");






const app = express();
const PORT = process.env.PORT || 3001;
const schema = makeExecutableSchema({ typeDefs, resolvers });
const httpServer = createServer(app);