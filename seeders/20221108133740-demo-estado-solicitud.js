'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('estado_solicitud',[{
      pendiente: 1 ,
      aprobado: 0,
      rechazado: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('estado_solicitud', null, {});
  }
};
