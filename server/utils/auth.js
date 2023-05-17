const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
    signToken: function ({ firstName, lastName, email, _id }) {
        const payload = { firstName, lastName, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};