import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "components/AuthProvider";
import { Title, Short } from "components/Typography";
import Profile from "components/Profile";
import Menu from "components/Menu";

const Layout = ({ children }) => {
	const router = useRouter();
	const { authState } = useAuth();
	const pathname = router.pathname === "/" ? "Welcome" : router.pathname;

	return (
		<>
			<Head>
				<title>Graphicl - {pathname}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{authState.userId == null ? (
				<div className="flex flex-col w-screen h-screen justify-center items-center bg-lavender-blush">
					{children}
				</div>
			) : (
				<div className="flex flex-row w-screen h-screen justify-between items-center">
					<div className="w-3/12 h-full flex flex-col items-center p-8 shadow-lg bg-lavender-web">
						<div className="h-20 flex flex-col items-center">
							<Title>GraphiCL</Title>
							<Short>Fullstack & Serverless Boilerplate</Short>
						</div>
						<Profile userId={authState.userId} />
					</div>
					<div className="w-7/12 h-full flex flex-col justify-center items-center p4">
						{children}
					</div>
					<div className="w-2/12 h-full flex flex-col justify-around items-center p-4 shadow-lg bg-lavender-web">
						<Menu />
					</div>
				</div>
			)}
		</>
	);
};

export default Layout;
