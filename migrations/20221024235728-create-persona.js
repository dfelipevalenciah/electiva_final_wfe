'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('persona', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_identificacion: {
        type: Sequelize.STRING
      },
      nombres_persona: {
        type: Sequelize.STRING
      },
      telefono_persona: {
        type: Sequelize.STRING
      },
      apellidos_persona: {
        type: Sequelize.STRING
      },
      email_persona: {
        type: Sequelize.STRING
      },
      edad_persona: {
        type: Sequelize.STRING
      },
      lugar_residencia_persona: {
        type: Sequelize.STRING
      },
      profesion_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "profesion",
          },
          key: "id",
        },
      },
      servicio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "servicio",
          },
          key: "id"
        },
      },
      registros_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "registros",
          },
          key: "id"
        }
      },
      token_google: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('persona');
  }
};