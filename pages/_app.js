import "public/styles/tailwind.css";
import AuthProvider from "components/AuthProvider";
import { ApolloProvider } from "@apollo/client";
import { Client } from "lib/apolloClient";

function MyApp({ Component, pageProps }) {
	const apolloClient = Client;

	return (
		<ApolloProvider client={apolloClient}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ApolloProvider>
	);
}

export default MyApp;
