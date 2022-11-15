'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('personas',[{
      numero_identificacion: '6588789',
      nombres_persona: 'Daniel',
      telefono_persona: '3265445789',
      apellidos_persona: 'Valencia',
      email_persona:'caniel1@gmail.com',
      edad_persona:'23',
      lugar_residencia_persona: 'calle 7 # 7 - 22',
      token_google:'001234',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('personas', null, {});

  }
};
