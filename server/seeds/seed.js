const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

const userData = require('./userData.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await User.create(profileSeeds);

        const users = await User.insertMany(userData);

        console.log('Users seeded!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});