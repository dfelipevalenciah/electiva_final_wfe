'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('registros',[{
    correo: 'eduard.pilli@campusucc.edu.co',
    contrasenia: 'eduard123',
    nombre_usuario: 'eduardpi',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('registros', null, {});

  }
};
