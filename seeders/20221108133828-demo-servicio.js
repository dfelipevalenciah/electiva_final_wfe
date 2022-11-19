'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('servicio',[{
      nombre_servicio: 'proceso contabilidad',
      servicio_descripcion: 'llevar los conteos de cantidades de solicitudes satisfacctorias',
      servicio_ciudad: 'bogota',
      servicio_fecha:'2022-08-25',
      servicio_valor:200,
      servicio_imagen: '442',
      servicio_direccion:'Calle 128 # 12-33',
      estado_solicitud_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('servicio', null, {});

  }
};