const model = require('../models');

exports.createMessage = async (req, res, next) => {
    delete req.body._id;
    try {
      const message = await model.Message.create({
        ...req.body })
        return res.status(201).json({ message : 'Message créé' })
    } 
    catch (error){
        return res.status(400).json({ error }) 
    }
};

exports.modifyMessage = async (req, res, next) =>{
    try {
        const {messageId} = req.params;
        const {updated} = await model.Message.update(req.body, {
            where: { _id: req.params.id }
        });

        if(updated) {
            const updatedMessage = await model.Message.findOne({
                where : { _id: messageId}
            })
            return res.status(200).json({ updatedMessage })
        }  
    } 
    catch (error) {
        return res.status(400).json({ error })
    }
};

exports.deleteMessage = async (req, res, next) => {
    try {
        const message = await model.Message.destroy({ 
            where : { _id: req.params.id } });
            return res.status(200).json({ message : 'Message supprimé' })
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