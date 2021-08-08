const { Datatypes } = require('sequelize')

const MessageSchema = sequelize.define('Message', {
    userId:{
        type: Datatypes.STRING,
        allowNull: false,
        require: true
    },
    name:{
        type: Datatypes.STRING,
        allowNull: false,
        require: true
    },
    department:{
        type: Datatypes.STRING,
        allowNull: false,
        require: true
    },
    leisure:{
        type: Datatypes.TEXT,
        allowNull: false,
        require: true
    },
    object:{
        type: Datatypes.STRING(1234),
        allowNull: false,
        require: true
    },
    message:{
        type: Datatypes.TEXT,
        allowNull: false,
        require: true
    },
    cover:{
        type: Datatypes.TEXT,
        allowNull: false,
        require: true
    },
    userId:{
        type: Datatypes.STRING,
        allowNull: false,
        require: true
    },
    like:{
        type: Datatypes.INTEGER,
        allowNull: true,
        require: true
    },
    dislike:{
        type: Datatypes.INTEGER,
        allowNull: true,
        require: true
    },
    UsersLike:[{
        type: Datatypes.INTEGER,
        allowNull: true,
        require: true
    }],
    usersDislike:[{
        type: Datatypes.INTEGER,
        allowNull: true,
        require: true
    }],
},
{
    tableName: 'Message'
});

module.exports = sequelize.models.MessageSchema;