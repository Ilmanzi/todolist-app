'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subTodoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subTodoList.belongsTo(models.todoList, {foreignKey:"todoList_id"})
    }
  }
  subTodoList.init({
    title: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    todoList_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subTodoList',
  });
  return subTodoList;
};