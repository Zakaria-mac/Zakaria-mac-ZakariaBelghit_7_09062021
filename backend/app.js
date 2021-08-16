const express = require('express');
const bodyParser = require('body-parser'); //transformer le corps de la requête en objet JSON.

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next();
})

app.use(bodyParser.json()); //Grâce à ce middleware, on a accès au Corps de la requête.

app.post('/api/messages', async (req, res, next) => {
    res.status(201)
})

app.get('/api/messages', (req, res, next) => {
    const messages = [
        {
          _id: '123',
          name: 'Dupond Henri',
          department: 'Finance',
          object: 'Sorti/afterwork',
          message: 'Salut la compagnie ! qui est dispo pour un afterwork ?',
          cover: 'https://www.viage.be/wp-content/uploads/2016/05/Afterwork-Bruxelles.jpg',
          like: 'false',
          dislike: 'true'
        },
        {
          _id: '124',
          name: 'Enrique',
          department: 'Tech',
          object: 'Problème technique',
          message: 'Salut  ! Pour l\équipe tech, j\ai un soucis avec mon lien',
          cover: 'https://www.viage.be/wp-content/uploads/2016/05/Afterwork-Bruxelles.jpg',
          like: 'false',
          dislike: 'true'
        },
        {
          _id: '125',
          name: 'Maluma',
          department: 'CEO',
          object: 'Café/croissant',
          message: 'Salut tout le monde ! j\ai dépose des croissant.choco sur la table ce matin',
          cover: 'https://www.viage.be/wp-content/uploads/2016/05/Afterwork-Bruxelles.jpg',
          like: 'https://image.similarpng.com/very-thumbnail/2020/11/Black-Like-icon-design-illustration-on-transparent-background-PNG.png',
          dislike: 'http://pngimg.com/uploads/dislike/dislike_PNG63.png'
        },
        {
          _id: '127',
          name: 'Madonna',
          department: 'Happiness Manager',
          object: 'Babyfoot cassé',
          message: 'Salut, le baby-foot est cassé ! Un technicien va venir vite pour le réparer.',
          cover: 'https://www.viage.be/wp-content/uploads/2016/05/Afterwork-Bruxelles.jpg',
          like: 'https://image.similarpng.com/very-thumbnail/2020/11/Black-Like-icon-design-illustration-on-transparent-background-PNG.png',
          dislike: 'http://pngimg.com/uploads/dislike/dislike_PNG63.png'
        }
    ];
    res.status(200).json(messages);
});






module.exports = app;