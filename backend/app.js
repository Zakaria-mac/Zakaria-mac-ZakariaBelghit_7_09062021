const express = require('express')

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next();
})

app.get((req, res, next) =>{
    res.json({message : 'votre requête à bien été reçue'})
})


module.exports = app;