const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        user_id: 1,
        username: FrankieD,
        password: 'frank123'
    },
    {   
        user_id: 2,
        username: SiggieFresh,
        password: 'keepitfresh13'
    },
    {
        user_id: 3,
        username: TryMe,
        password: 'test123'
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;