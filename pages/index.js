import Head from "next/head";
import { useAuth } from "components/AuthProvider";
import { Title, Big } from "components/Typography/index";
import { AuthLinkButton } from "components/CTA";

export default function Home() {
	const { authState } = useAuth();

	return (
		<div className="flex flex-col w-screen h-screen justify-center items-center">
			<Head>
				<title>Graphicl Boilerplate</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{authState.userId == null ? (
				<main className="h-2/5 flex flex-col justify-around">
					<Title>Welcome to Graphicl !</Title>
					<div className="flex flex-row justify-around w-full p3">
						<AuthLinkButton link="/authentication/signin">Sign In</AuthLinkButton>
						<AuthLinkButton link="/authentication/register">Register</AuthLinkButton>
					</div>
				</main>
			) : (
				<main className="h-2/5 flex flex-col justify-around">
					<Title>Welcome to Graphicl !</Title>
					<Big>Your are already Logged</Big>
					<div className="flex flex-row justify-around w-full p3">
						<AuthLinkButton link="/home">Go Home</AuthLinkButton>
					</div>
				</main>
			)}
		</div>
	);
}
