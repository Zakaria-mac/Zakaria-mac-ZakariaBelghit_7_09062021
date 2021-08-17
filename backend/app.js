const express = require('express');
const bodyParser = require('body-parser'); //transformer le corps de la requête en objet JSON.

const model = require('./models');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next();
})

app.use(bodyParser.json()); //Grâce à ce middleware, on a accès au Corps de la requête.

app.post('/api/messages',(req, res, next) => {
    delete req.body._id;
    model.Message.create({
      ...req.body
    })
      .then(() => res.status(201).json({ message : 'Message envoyé' }))
      .catch(error => res.status(400).json({ error }));
})

app.get('/api/messages/:id', async (req, res, next) =>{
  const message = await model.Message.findOne({ _id: req.params.id })
  return res.status(200).json({ message })
})

app.get('/api/messages', (req, res, next) => {
    model.Message.findAll()
      .then(messages => res.status(200).json(messages))
      .catch(error => res.status(400).json({ error }))
});








module.exports = app;