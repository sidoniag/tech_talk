const { Post } = require("../models");

const postdata = [
  {
    title: "FrankieD Does It",
    post_body: `Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080. `,
    user_id: 1,
  },
  {
    title: "What Do You Know?",
    post_body:
      "Carve casper switch kickturn late downhill. Hardware nosebone Rick McCrank bluntslide bigspin steps egg plant. Slap maxwell roll-in airwalk fast plant fastplant pivot.",
    user_id: 1,
  },
  {
    title: "Learn the Hard Way",
    post_body:
      "What a change when a technology clicks for a new developer like myself.",
    user_id: 2,
  },
  {
    title: "Look at the View",
    post_body:
      "this course  made me recognize the way I learn. It was different than most of my classmates.",
    user_id: 2,
  },
  {
    title: "Back Seat Driver",
    post_body: "It is easier for me to see the big picture and work backwards.",
    user_id: 2,
  },
  {
    title: "Tell Me About It",
    post_body:
      "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.",
    user_id: 3,
  },
  {
    title: "Yes It Does",
    post_body:
      "Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
