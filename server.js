const express = require('express');
const app = express();
app.use.helmet();

// setup const recipeRouter = require('');

const server = express();
server.use(express.json());
// server.use('/api/recipe', recipeRouter)

module.exports = server;
