import { ApolloServer } from "apollo-server-micro";
import typeDefs from "./schemas";
import resolvers from "./resolvers";
import connectDb from "database/mongoose";

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req }) => {
		return { req };
	},
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export default connectDb(handler);
