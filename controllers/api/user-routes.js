const router = require("express").Router();
const { User } = require("../../models");

// GET /api/users
router.get('/', (req, res) => {});

// GET /api/users/1
router.get('/:id', (req, res) => {});

// POST /api/users
router.post('/', (req, res) => {});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;

// // POST /api/users
// router.post('/', (req, res) => {
//   // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
//   User.create({
//     username: req.body.username,
//     password: req.body.password,
//   })
//     .then((dbUserData) => {
//       req.session.save(() => {
//         req.session.user_id = dbUserData.id;
//         req.session.username = dbUserData.username;
//         req.session.loggedIn = true;

//         res.json(dbUserData);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // POST login
// router.post('/login', (req, res) => {
//   // expects {email: 'lernantino@gmail.com', password: 'password1234'}
//   User.findOne({
//     where: {
//       username: req.body.username,
//     },
//   }).then((dbUserData) => {
//     if (!dbUserData) {
//       res.status(400).json({ message: "No user found with that name!" });
//       return;
//     }

//     const validPassword = dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: "Incorrect password!" });
//       return;
//     }

//     req.session.save(() => {
//       // declare session variables
//       req.session.user_id = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.loggedIn = true;

//       res.json({ user: dbUserData, message: "You are now logged in!" });
//     });
//   });
// });

// // Post logout
// router.post('/logout', (req, res) => {
//       if (req.session.loggedIn) {
//         req.session.destroy(() => {
//           res.status(204).end();
//         });
//       }
//       else {
//         res.status(404).end();
//       }
//     });

// // DELETE /api/users/1
// router.delete('/:id', (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
