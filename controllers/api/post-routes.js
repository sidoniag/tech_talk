const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');

// // get all posts
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'created_at',
    ],
    include: [
        {
              model: User,
              attributes: ['username']
            }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'text',
      'title',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      // {
      //   model: Comment,
      //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      //   include: {
      //     model: User,
      //     attributes: ['username']
      //   }
    // },
    ]
  })
    .then(dbPostData => {
      console.log(dbPostdata);
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post('/', (req, res) => {
//   // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
//   Post.create({
//     title: req.body.title,
//     text: req.body.text,
//     user_id: req.session.user_id
//   })
//     .then(dbPostData => res.json(dbPostData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


// router.put('/:id', (req, res) => {
//   Post.update(
//     {
//       title: req.body.title
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;