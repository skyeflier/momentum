const express = require('express');
const db = require('./config/connection')
const PORT = process.env.port || 3000;
const app = express();

// Require model 
const { User } = require('./models');

// Set up home page
app.get('/', (req, res) => {
    res.send('Hello, Moms!');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

// Creates a new user
app.post('/new-user/:user', (req, res) => {
    const newUser = new User({ name: req.params.user });
    newUser.save();
    if (newUser) {
        res.status(201).json(newUser);
    } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Finds all users
app.get('/all-users', async (req, res) => {
    try {
        // Using model in route to find all documents that are instances of that model
        const result = await User.find({});
        res.status(200).json(result);
    } catch (err) {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Finds the first matching document
app.get('/find-user', async (req, res) => {
    try {
        // Using model in route to find all documents that are instances of that model
        const result = await User.findOne({ name: 'Wine' });
        res.status(200).json(result);
    } catch (err) {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Finds first document matching parameter and deletes
// For demo, use 'Wine' as URL param
app.delete('/find-one-delete/:userName', async (req, res) => {
    try {
        const result = await User.findOneAndDelete({ name: req.params.user });
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
    } catch (err) {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Set up local port
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});