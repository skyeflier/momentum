const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// Require model 
const user = require('./models/User')

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection')

const PORT = process.env.port || 3000;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Set up home page
app.get('/', (req, res) => {
    res.send('Hello, Moms!');
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Set up local port
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

/////////////////////////////////////////////////////


// // Creates a new user
// app.post('/new-user/:user', (req, res) => {
//     const newUser = new user({ name: req.params.user });
//     newUser.save();
//     if (newUser) {
//         res.status(201).json(newUser);
//     } else {
//         console.log('Uh Oh, something went wrong');
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// });

// // Finds all users
// app.get('/all-users', async (req, res) => {
//     try {
//         // Using model in route to find all documents that are instances of that model
//         const result = await user.find({});
//         res.status(200).json(result);
//     } catch (err) {
//         console.log('Uh Oh, something went wrong');
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// });

// // Finds the first matching document
// app.get('/find-user', async (req, res) => {
//     try {
//         // Using model in route to find all documents that are instances of that model
//         const result = await user.findOne({ name: 'Wine' });
//         res.status(200).json(result);
//     } catch (err) {
//         console.log('Uh Oh, something went wrong');
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// });

// // Finds first document matching parameter and deletes
// // For demo, use 'Wine' as URL param
// app.delete('/find-one-delete/:userName', async (req, res) => {
//     try {
//         const result = await user.findOneAndDelete({ name: req.params.user });
//         res.status(200).json(result);
//         console.log(`Deleted: ${result}`);
//     } catch (err) {
//         console.log('Uh Oh, something went wrong');
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// });

