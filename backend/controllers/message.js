const model = require('../models');
const fs = require('fs');

exports.createMessage = async (req, res, next) => {
    /* Pour ajouter un fichier à la requête, le front-end doit envoyer les données de la requête sous la forme form-data. 
    Le corps de la requête est un objet Message converti en chaine. On l'analyse donc avec JSON.parse() pour obtenir un objet utilisable.
    */
    const messageObject = JSON.parse(req.body.message);

    delete messageObject._id;

    try {
        const message = await model.Message.create({
            ...messageObject,
            cover: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        })
        return res.status(201).json({ message })

    } catch (error) {
        return res.status(400).json({ error })
    }
};

exports.modifyMessage = async (req, res, next) => {
    try {

        const message = await model.Message.findOne({
            where: { id: req.params.id }
        });

        const messageObject = req.file ?
        
            {
                ...JSON.parse(req.body.message),
                cover: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            } : { ...req.body }

            await model.Message.update({where :{ id: req.params.id }}, {...messageObject, where:{ id:req.params.id }})
                .then(() => res.status(200).json({ message : 'Message modifé'}))
                .catch(error => res.status(400).json({ error }))

    } catch (error) {
        return console.log(error)
    }
};

exports.deleteMessage = async (req, res, next) => {
    try {
        const deletedMessage = await model.Message.findOne({
            where: { id: req.params.id }
        });

        const filename = deletedMessage.cover?.split('/images')[1];
        fs.unlink(`images/${filename}`, (err) => { 
            if(err){
                console.log('Le message n\'existe pas')
            }  
        }) 
            model.Message.destroy({
            where: { id: req.params.id }
        });
        return res.status(200).json({ message: 'Message supprimé' })
    }
    catch (error) {
        return res.status(400).json({ error })
    }
};

exports.getOneMessage = async (req, res, next) =>{
    try{
        const message = await model.Message.findOne({
            where:{ id: req.params.id }}) 
            return res.status(200).json({ message })
    }
    catch (error){
        return res.status(400).json({ error })
    }
}

exports.getAllMessages = async (req, res, next) => {
    try {
        const message = await model.Message.findAll()
        return res.status(200).json({ message })
    }
    catch (error) {
        return res.status(400).json({ error })
    }
};