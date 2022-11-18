'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('profesion',[{
      profesion_nombre: 'contador',
      profesion_descripcion: 'encargado de la contabilidad de la empresa',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('profesion', null, {});
  }
};
