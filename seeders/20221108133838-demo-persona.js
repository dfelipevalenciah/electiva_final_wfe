'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('personas',[{
      nombre_persona: 'Andres',
      telefono_persona: '32122251225',
      apellidos_persona: 'Diaz',
      email_persona:'andres1@gmail.com',
      edad_persona:'98',
      lugar_residencia_persona: 'calle 8 # 11 - 22',
      token_google:'225443'
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('personas', null, {});

  }
};
