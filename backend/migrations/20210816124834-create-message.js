'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      object: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.TEXT
      },
      cover: {
        type: Sequelize.TEXT
      },
      like: {
        type: Sequelize.INTEGER
      },
      dislike: {
        type: Sequelize.INTEGER
      },
      usersLiked: {
        type: Sequelize.ARRAY
      },
      usersDisliked: {
        type: Sequelize.ARRAY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  }
};