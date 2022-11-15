'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('servicios',[{
      nombre_servicio: 'Mantenimiento app',
      servicio_descripcion: 'realizar mantenimiento de app',
      servicio_ciudad: 'popayan',
      servicio_fecha:'2022-08-20',
      servicio_valor:200,
      servicio_imagen: '1111',
      servicio_direccion:'Calle 5 # 22-10',
      estado_solicitud: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('servicios', null, {});

  }
};