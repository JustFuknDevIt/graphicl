import { ApolloServer } from "apollo-server-micro";
import httpHeadersPlugin from "apollo-server-plugin-http-headers";
import jwt from "jsonwebtoken";
import typeDefs from "graphql/server/schemas";
import resolvers from "graphql/server/resolvers";
import connectDb from "database/mongoose";

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [httpHeadersPlugin],
	context: async ({ req }) => {
		// Header is in form 'Bearer <token>', grabbing the part after ' '
		const token = req.headers.authorization?.split(" ")[1] || undefined;
	},
	playground: true,
	introspection: true,
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export default connectDb(handler);
