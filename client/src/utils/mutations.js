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
mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
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
mutation updateUser($name: String, $email: String, $password: String) {
    updateUser(name: $name, email: $email, password: $password) {
        _id
        name
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

