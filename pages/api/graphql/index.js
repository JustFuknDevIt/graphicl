import { ApolloServer } from "apollo-server-micro";
import httpHeadersPlugin from "apollo-server-plugin-http-headers";
import jwt from "jsonwebtoken";
import typeDefs from "./schemas";
import resolvers from "./resolvers";
import connectDb from "database/mongoose";

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [httpHeadersPlugin],
	context: async ({ req }) => {
		const token = req.headers.authorization?.split(" ")[1] || undefined;

		const setCookies = [];
		const setHeaders = [];

		try {
			const { user } = jwt.verify(token, process.env.JWT_SECRET);
			return { req, setCookies, setHeaders, user };
		} catch (error) {
			return { setCookies, setHeaders, req };
		}
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
