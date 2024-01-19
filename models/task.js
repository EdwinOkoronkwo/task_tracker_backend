"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      // define association here
      this.belongsTo(Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }
  Task.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      task_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // image: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      priority_level: {
        type: DataTypes.ENUM("High", "Low", "Medium"),
        allowNull: false,
      },
      progress_level: {
        type: DataTypes.ENUM("Pending", "Started", "Completed"),
      },
    },
    {
      sequelize,
      tableName: "tasks",
      modelName: "Task",
      timestamps: true,
    }
  );
  return Task;
};
