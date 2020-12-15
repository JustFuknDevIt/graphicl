import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
	ssrMode: typeof window === "undefined",
	link: new HttpLink({
		uri: `${process.env.BASE_URL}/api/graphql`,
	}),
	cache: new InMemoryCache({
		typePolicies: {
			User: {
				keyFields: ["id", "username"],
			},
		},
	}),
});
