const model = require('../models');
const fs = require ('fs');
const { ERANGE } = require('constants');

exports.createMessage = async (req, res, next) => {
    /* Pour ajouter un fichier à la requête, le front-end doit envoyer les données de la requête sous la forme form-data. 
    Le corps de la requête est un objet Message converti en chaine. On l'analyse donc avec JSON.parse() pour obtenir un objet utilisable.
    */
    const messageObject = JSON.parse(req.body.message);
    delete messageObject._id;

        try {
        const message = await model.Message.create({
            ...messageObject,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        })
            return res.status(201).json({ message })

        } catch (error){
            return res.status(400).json({ error }) 
        }
};

exports.modifyMessage = async (req, res, next) =>{
    try {

        const messageObject = req.file ?
        {
            ...JSON.parse(req.body.message),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : {...req.body}

        const {updated} = await model.Message.update(messageObject, {
            where: { _id: req.params.id }
        });

        if(updated) {
            const updatedMessage = await model.Message.findOne({
                where : { _id: req.params.id}
            })
            return res.status(200).json({ updatedMessage })
        }
        throw new Error('Message non trouvé') 
    } catch (error) {
        return res.status(400).json({ error })
    }
};

exports.deleteMessage = async (req, res, next) => {
    try {
        const deletedMessage = await model.Message.findOne({
            where : { _id: req.params.id } 
        });
            return message => {
                const filename = message.imageUrl.split('/images')[1];
                    fs.unlink(`images/${filename}`,() => {
                        model.Message.destroy({ 
                            where : { _id: req.params.id } });
                                return res.status(200).json({ message : 'Message supprimé' })
                    })
            }
    }
    catch(error){
        return res.status(400).json({ error })
    }
};

exports.getAllMessages = async (req, res, next) => {
    try{
        const message = await model.Message.findAll()
        return res.status(200).json({ message })
    }  
    catch(error) {
        return res.status(400).json({ error })
    }  
};