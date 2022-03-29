"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comments.belongsTo(models.users, {
        foreignKey: "user_id",
      });
      comments.belongsTo(models.posts, {
        foreignKey: "post_id",
      });
    }
  }
  comments.init(
    {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_desc: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comments",
    }
  );
  return comments;
};
