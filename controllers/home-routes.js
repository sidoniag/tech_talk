const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: ['id', 'title', 'post_body', 'created_at'],
        include: [
          {
          model: User,
          attributes: ['username']
        }
      ]
    })
        .then(dbPostData => {
          //console.log(dbPostData[0]);
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('homepage', {posts}
           );
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// router.get("/post/:id", (req,res) => {
//   Post.findByPk(req.params.id, {
//     include: [
//       User,
//       {
//         model: Comment,
//         include: [User],
//       },
//     ],
//   })
//   .then((dbPostData) => {
//     if (dbPostData) {
//       const post = dbPostData.get({ plain: true });

//       res.render("post", { post });
//     } else {
//       res.status(404).end();
//     }
//   })
//   .catch((err) => {
//     res.status(500).json(err);
//   })
// })

// router.get("/login", (req,res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/login");
//     return;
//   }

//   res.render('login');
// });

// router.post('/signup', (req, res) => {
//   if (req.session.loggedIn) {
//     req.redirect('/');
//     return;
//     }

//     res.render("signup");
//   });

module.exports = router;