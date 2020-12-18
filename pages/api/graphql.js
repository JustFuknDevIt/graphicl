import { ApolloServer } from "apollo-server-micro";
import httpHeadersPlugin from "apollo-server-plugin-http-headers";
import typeDefs from "graphql/server/schemas";
import resolvers from "graphql/server/resolvers";
import connectDb from "database/mongoose";

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [httpHeadersPlugin],
	context: async ({ req, res }) => {
		const setCookies = [];
		const setHeaders = [];

		if (req.headers.cookie) {
			const authToken = req.headers.cookie.split("; ")[0].split("=").pop();
			const expiresToken = Date.parse(req.headers.cookie.split("; ")[1].split("=").pop());
			const actualDate = Date.now();
			const isExpired = actualDate > expiresToken;

			if (isExpired) {
				throw new Error("Your Token is Expired, Please Sign In !");
			}

			return { req, res, authToken, setCookies, setHeaders };
		}

		return { req, setCookies, setHeaders };
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
