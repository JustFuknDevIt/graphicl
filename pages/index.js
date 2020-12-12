import Head from "next/head";
import { Title } from "components/Typography/index";

export default function Home() {
	return (
		<div className="flex flex-col w-screen h-screen justify-center items-center">
			<Head>
				<title>Graphicl Boilerplate</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Title>Welcome to Graphicl !</Title>
			</main>
		</div>
	);
}
