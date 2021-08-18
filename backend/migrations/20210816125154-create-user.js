'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        unique: true,
        required: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
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
      leisure: {
        type: Sequelize.TEXT,
        required: true,
        allowNull: false
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
    await queryInterface.dropTable('Users');
  }
};