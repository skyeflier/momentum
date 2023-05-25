const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const stripe = require('stripe')('sk_test_51NBQ9UILnn69mICeE8AVcRM5NfS3f3vhViIB3U6SSohQ1myDYw1pP2SLjfIIPgpsHaaPYSdJFDvMV0E92mta6IqO00ONUG53IW');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const MOMENTUM_DOMAIN = 'https://momentum-v1.herokuapp.com';

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1NBl47ILnn69mICebs0SHEhw',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${MOMENTUM_DOMAIN}?success=true`,
        cancel_url: `${MOMENTUM_DOMAIN}?canceled=true`,
        // success_url: `${PORT}?success=true`,
        // cancel_url: `${PORT}?canceled=true`,
    });

    res.redirect(303, session.url);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.start().then(() => {
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
});
