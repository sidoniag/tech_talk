const Post = require('./Post');
const User = require('./User');
// const Comment = require('./Comment');

// create associations
// user can make many post
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// a post can only belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id'
//   });
  
// Comment.belongsTo(Post, {
//     foreignKey: 'post_id'
//   });
  
// User.hasMany(Comment, {
//     foreignKey: 'user_id'
//   });
  
// Post.hasMany(Comment, {
//     foreignKey: 'post_id'
//   });

module.exports = { User, Post };
// module.exports = { User, Post, Comment };