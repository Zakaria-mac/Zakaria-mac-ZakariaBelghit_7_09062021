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
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      department: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      object: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      message: {
        type: Sequelize.TEXT,
        required: true,
        allowNull: false
      },
      cover: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      like: {
        type: Sequelize.INTEGER,
        required: true,   
      },
      dislike: {
        type: Sequelize.INTEGER,
        required: true,
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