import { gql } from "apollo-server-micro";

const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		email: String!
		passwordHash: String!
	}

	type Query {
		getUsers: [User]
		getUser(email: String!): User!
	}

	type Mutation {
		registerUser(name: String!, email: String!, password: String!): User!
	}
`;

export default typeDefs;
