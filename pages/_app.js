import { ApolloProvider } from "@apollo/client";
import { Client } from "lib/apolloClient";
import AuthProvider from "components/AuthProvider";
import "public/styles/tailwind.css";

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
