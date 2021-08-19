const jwt = require ('jsonwebtoken');

module.exports= (req, res, next) => {
    try{
        //On récupère le token qui est dans le header Authorisation + et on récupère grâce à split le deuxième élément du tableau, soit authorisation.
        const token = req.headers.authorization.split(' ')[1];
        //On décode le token grâce à la fonction 'verify'
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        //Quand on décode le token, ça devient un objet javascript. On récupère le userId. Si le demande contient un Id utilisateur, on le compare à celui xtrait du token. 
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId){
            throw 'User Id non valable'
        }else{
            next();
        }
    } catch(error){
        res.status(401).json( { error : error | 'Requête non authentifiée !'})
    }
}