import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
	ssrMode: typeof window === "undefined",
	link: new HttpLink({
		uri: "https://graphicl.vercel.app/api/graphql",
	}),
	cache: new InMemoryCache({
		typePolicies: {
			User: {
				keyFields: ["email", "username"],
			},
		},
	}),
});
