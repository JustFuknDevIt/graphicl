import { gql } from "apollo-server-micro";

const avatarOptions = `
topType: String
accessoriesType: String
hairColor: String
hatColor: String
facialHairType: String
facialHairColor: String
clotheType: String
clotheColor: String
eyeType: String
eyebrowType: String
mouthType: String
skinColor: String
`;

const typeDefs = gql`

	scalar Date

	type User {
		id: ID!
		username: String!
		email: String!
		createdDate: Date
		avatarOptions: AvatarOptions
	}

	type AvatarOptions {
		${avatarOptions}
	}

	input UpdateUserInput {
		username: String
		email: String
		avatarOptions: updateUserAvatarInput
	}
	
	input updateUserAvatarInput {
		${avatarOptions}
	}

	type AuthPayload {
    token: String!
		expires: Date!
    userId: ID!
  }

	type Query {
		getUsers: [User]
		getUser(userId: ID!): User!
	}

	type Mutation {
		registerUser(email: String!, username: String!): String!
		signInUser(email: String!, username: String!): String!
		finishAuthUser(temporaryToken:String!):AuthPayload!
		updateUser(userId: ID!, input: UpdateUserInput): User!
    signOutUser(userId: ID!): Boolean!
	}
`;

export default typeDefs;
