const { Schema, model } = require('mongoose');

const userInfo = new UserInputError(
    {
        firstName: {
            type: String,
            required: true,
            max_length: 50,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {

        }
    }
);
