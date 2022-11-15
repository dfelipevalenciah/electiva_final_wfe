'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('registros',[{
    correo: 'andres_002@campusucc.edu.co',
    contrasenia: 'andres1123',
    nombre_usuario: 'andresdiaz',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('registros', null, {});

  }
};
