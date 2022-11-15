'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profesion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profesion.init({

    id_profesion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profesion_nombre:{
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    profesion_descripcion:{
      type: DataTypes.STRING(255),
      defaultValue: false,
      allowNull: false,
    },
    
  }, {
    sequelize,
    modelName: 'profesion',
  });
  return profesion;
};