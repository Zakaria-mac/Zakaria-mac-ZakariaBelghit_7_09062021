const model = require('../models');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const user = require('../models/user');

require('dotenv').config();

exports.signup = (req, res, next) => { 
    bcrypt.hash(req.body.password, 10) 
        .then(hash => {
            const user = model.User.build({
                email: req.body.email,
                name: req.body.name,
                department: req.body.department,
                leisure: req.body.leisure,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé'}))
                .catch(error => res.status(400).json({ error })) 
                
        })
        .catch(error => res.status(500).json({ error }))
};


exports.login = (req, res, next) => {

    const privateToken = process.env.DB_PRIVATE_TOKEN

    model.User.findOne({
        where : { email: req.body.email }})
            .then(user => {
                if(!user) {
                    return res.status(401).json({ error : 'Utilisateur non trouvé' })
                }
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if(!valid){
                            return res.status(401).json({ error : 'Mot de passe incorrect' })
                        }
                        res.status(200).json({
                            email: user.email,
                            userId: user.id,
                            token: jwt.sign(
                                { userId: user.id },
                                privateToken,
                                { expiresIn:'24h' }
                            )
                        });
                    })
                    .catch(error => console.log(error) || res.status(500).json( { error }))
            })
            .catch(error => res.status(500).json( { error }))
};

exports.modifyProfile = async (req, res, next) => {
    try {
        const profile = await model.User.update({
            name: req.body.name,
            department: req.body.department,
            leisure: req.body.leisure
        }, 
        {where : {
                id : req.userId
        }})
        return res.status(201).json({ profile })
    
    } catch (error){
        return console.log(error) || res.status(500).json( { error })
    }
};

exports.getProfile = async (req, res, next) => {
    try{
        const user = await model.User.findAll()
        return res.status(200).json({ user })
    }  
    catch(error) {
        return res.status(400).json({ error })
    }  
};