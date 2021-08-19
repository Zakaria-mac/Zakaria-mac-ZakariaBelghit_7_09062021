const model = require('../models');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => { 
    bcrypt.hash(req.body.password, 10) //Bcrypt : fonction asynchrone, donc pas besoin de mettre async en début de fonction?
        .then(hash => {
            const user = model.User.create({
                email: req.body.email,
                password: hash
            });
            return res.status(201).json({ message : 'Utilisateur créé' })
        })
        .catch(error => res.status(500).json({ error }))
};


exports.login = async (req, res, next) => {
    try{
        model.user.findOne({
        where : { email: req.body.email }
        
        
    })}
    catch (error) {
        return res.status(500).json( { error })
    }
};