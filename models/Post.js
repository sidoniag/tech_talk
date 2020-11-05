const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// // create our Post model
// class Post extends Model {
//   return Post.findOne({
//     where: {
//       id: body.post_id
//     },
//     attributes: [
//       'id',
//       'post_body',
//       'username',
//     ]
//   });
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
    username: {
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