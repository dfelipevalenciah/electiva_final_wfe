'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servicios', {
      id_servicio: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_servicio: {
        type: Sequelize.STRING
      },
      servicio_descripcion: {
        type: Sequelize.STRING
      },
      servicio_ciudad: {
        type: Sequelize.STRING
      },
      servicio_fecha: {
        type: Sequelize.DATE
      },
      servicio_valor: {
        type: Sequelize.STRING
      },
      servicio_imagen: {
        type: Sequelize.STRING
      },
      servicio_direccion: {
        type: Sequelize.STRING
      },
      estado_solicitud: {
        type: Sequelize.INTEGER,
        estado_solicitud:class{
          constructor(id_estado_solicitud){
            this.id_estado_solicitud=id_estado_solicitud;
          }
        }
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
    await queryInterface.dropTable('servicios');
  }
};