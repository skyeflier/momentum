import { gql } from '@apollo/client';

export const GET_SUBSCRIPTIONS = gql`
query getSubscriptions($name: String) {
    subscriptions(name: $name) {
        _id
        name
        description
        price
        quantity
        image
    }
}
`;

export const GET_SUBSCRIPTION = gql`
query getSubscription($_id: ID!) {
    subscription(_id: $_id) {
        _id
        name
        description
        price
        quantity
        image
    }
}
`;

export const GET_USER = gql`
query getUser {
    user {
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

export const GET_CHECKOUT = gql`
query getCheckout($subscriptions: [ID]!) {
    checkout(subscriptions: $subscriptions) {
        session
    }
}
`;

export const QUERY_CHECKOUT = gql`
query getCheckout($id: ID!) {
    checkout(id: $id) {
        session
    }
}
`;

export const QUERY_ORDERS = gql`
query getOrders {
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
`;

export const QUERY_ORDER = gql`
query getOrder($id: ID!) {
    order(_id: $id) {
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
`;

