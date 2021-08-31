const jwt = require ('jsonwebtoken');
require('dotenv').config();

module.exports= (req, res, next) => {
    try{
        const privateToken=process.env.DB_PRIVATE_TOKEN
        //On récupère le token qui est dans le header Authorisation + et on récupère grâce à split le deuxième élément du tableau, soit authorisation.
        const token = req.headers.authorization.split(' ')[1];
        //On décode le token grâce à la fonction 'verify'
        const decodedToken = jwt.verify(token, privateToken);
        //Quand on décode le token, ça devient un objet javascript. On récupère le userId. Si le demande contient un Id utilisateur, on le compare à celui xtrait du token. 
        const userId = decodedToken.userId;
        console.log(userId)
        if(!userId){ 
            throw 'User Id non valable'
        }else{
            req.userId = userId
            next();
        }
    } catch(error){
        res.status(401).json( { error : error | 'Requête non authentifiée !'})
    }
}