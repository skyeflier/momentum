import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        token
        user {
        _id
        }
    }
}
`;

export const ADD_ORDER = gql`
mutation addOrder($subscriptions: [ID]!) {
    addOrder(subscriptions: $subscriptions) {
        purchaseDate
        subscriptions {
        _id
        name
        description
        price
        quantity
        image
        }
    }
}
`;

export const UPDATE_USER = gql`
mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        _id
        firstName
        lastName
        email
        orders {
        _id
        purchaseDate
        subscriptions {
            _id
            name
            description
            price
            quantity
            image
        }
        }
    }
}
`;

export const UPDATE_SUBSCRIPTION = gql`
mutation updateSubscription($_id: ID!, $quantity: Int!) {
    updateSubscription(_id: $_id, quantity: $quantity) {
        _id
        name
        description
        price
        quantity
        image
    }
}
`;

<<<<<<< HEAD
=======

>>>>>>> f9601809ab5c54c3c6c644eb346f39ed4d95aa35
