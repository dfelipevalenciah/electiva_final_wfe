'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servicio', {
      id: {
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
        allowNull: false,
        references: {
          model: {
            tableName: "estado_solicituds"
          },
          key: "id"
        },
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
    await queryInterface.dropTable('servicio');
  }
};