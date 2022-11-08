'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('profesions',[{
      profesion_nombre: 'ingeniero de sistemas',
      profesion_descripcion: 'persona encargada de realizar el mantimiento de las aplicaciones',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('profesions', null, {});
  }
};
