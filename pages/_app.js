import { ApolloProvider } from "@apollo/client";
import { Client } from "lib/apolloClient";
import AuthProvider from "components/AuthProvider";
import "public/styles/tailwind.css";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }) {
	const apolloClient = Client;

	return (
		<ApolloProvider client={apolloClient}>
			<AuthProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthProvider>
		</ApolloProvider>
	);
}

export default MyApp;
