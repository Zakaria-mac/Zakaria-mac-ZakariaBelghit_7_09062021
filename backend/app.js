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

app.post('/api/messages', async(req, res, next) => {
  delete req.body._id;
  try {
    const message = await model.Message.create({
    ...req.body })
    return res.status(201).json({ info :"Message créé" })
  } 
  catch (error){
    return res.status(400).json({ error }) 
  }
})

app.put('/api/messages/:id', async (req, res, next) =>{
  try {
    const message = await model.Message.findOne({ where: { _id: req.params.id } });
    message.save({...req.body, _id: req.params.id }).then(function(){
      return res.status(200).json({ info :"Message modifié" })
    })    
  } 
  catch(error) {
    return res.status(400).json({ error })
  }
});

app.delete('/api/messages/:id', async (req, res, next) => {
  try {
    const message = await model.Message.destroy({ where : { _id: req.params.id } });
      return res.status(200).json({ info :"Message supprimé" })
  }
  catch(error){
    return res.status(400).json({ error })
  }
})

app.get('/api/messages', async(req, res, next) => {
  try{
    const message = await model.Message.findAll()
    return res.status(200).json({ message })
  }  
  catch(error) {
    return res.status(400).json({ error })
  }  
});

module.exports = app;