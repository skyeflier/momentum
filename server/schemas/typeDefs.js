const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Subscription {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    subscriptions: [Subscription]
  }

  type User {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
  }

  type Checkout {
    session: ID
  }

  # Set up an Auth type to handle returning data from a user creating or user login
  type Auth {
    token: ID!
    user: User
  }

   type Query {
    subscriptions(name: String): [Subscription]
    subscription(_id: ID!): Subscription
    user: User
    order(_id: ID!): Order
    checkout(subscriptions: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(subscriptions: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateSubscription(_id: ID!, quantity: Int!): Subscription
    login(email: String!, password: String!): Auth
  }
`;

// UNSURE IF I NEED THIS?
//   type Query {
//     users: [User]!
//     user(userId: ID!): User
//   }

module.exports = typeDefs;