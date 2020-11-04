const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: FrankieD,
        post_body: `Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080. `,
        user_id: 1
    },
    {
        username: FrankieD,
        post_body: 'Carve casper switch kickturn late downhill. Hardware nosebone Rick McCrank bluntslide bigspin steps egg plant. Slap maxwell roll-in airwalk fast plant fastplant pivot.',
        user_id: 1
    },
    {
        username: SiggieFresh,
        post: 'What a change when a technology clicks for a new developer like myself.',
        user_id: 2
    },
    {
        username: SiggieFresh,
        post: 'I realized during this course that my learning style is different from most of my classmates.\n\
        I need to learn big-picture, down vs. parts of a build. Working lessons backwards helps.',
        user_id: 2
    },
    {
        username: TryMe,
        post_body: 'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.',
        user_id: 3
    },
    {
        username: TryMe,
        post_body: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.',
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;