const { gql } = require("apollo-server-express");

const typeDefs = gql`
 type Geo {
    lat: String
    lng: String
  }
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }
   type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    username:String
    address:Address
    phone:String
    website:String
    company:Company
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
  }
`;

module.exports = typeDefs;