'use strict';

const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.titleList, { foreignKey: "user_id" })
    }
  }
  user.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        unique: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        unique: true
      }
    },
    password: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        let plainPassword = user.password;
        const hashedPassword = bcrypt.hashSync(plainPassword, salt);
        user.password = hashedPassword;
      }
    },
    sequelize,
    modelName: 'user',
  }, {

  });
  return user;
};