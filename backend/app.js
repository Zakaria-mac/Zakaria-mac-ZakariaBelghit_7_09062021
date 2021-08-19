const express = require('express');
const bodyParser = require('body-parser'); //transformer le corps de la requête en objet JSON.

const messageRoutes = require('./routes/message')
const userRoutes = require('./routes/user')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next();
})

app.use(bodyParser.json()); //Grâce à ce middleware, on a accès au Corps de la requête.

app.use('/api/messages', messageRoutes)
app.use('/api/auth', userRoutes)

module.exports = app;