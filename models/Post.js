const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// // create our Post model
class Post extends Model {}
  // post_body (req, res) {
  // return Post.findOne.create({
  //   where: {
  //     id: body.post_id
  //   },
  //   attributes: [
  //     'id',
  //     'post_body',
  //     'username',
  //   ]
  // });
// };

// // create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;