'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personas', {
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
      profesions_id_profesions:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "profesions",
          },
          key: "id_profesion",
        },
      },
      servicio: {
        type: Sequelize.INTEGER,
        servicio:class{
          constructor(id_servicio){
            this.id_servicio=id_servicio;
          }
        }
      },
      registro: {
        type: Sequelize.INTEGER,
        registro:class{
          constructor(id_registro){
            this.id_registro=id_registro;
          }
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
    await queryInterface.dropTable('personas');
  }
};