import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "components/AuthProvider";
import { Title, Short } from "components/Typography";
import Profile from "components/Profile";
import Menu from "components/Menu";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
	const router = useRouter();
	const { authState } = useAuth();
	const userId = authState.userId;
	const pathname = router.pathname === "/" ? "Welcome" : router.pathname;

	const [isAuth, setIsAuth] = useState(authState.isAuth);

	useEffect(() => {
		setIsAuth(authState.isAuth);
	});

	return (
		<>
			<Head>
				<title>Graphicl - {pathname}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{isAuth ? (
				<div className="flex flex-col md:flex-row w-screen h-screen justify-between items-center">
					<div className="w-full md:w-3/12 h-1/3 md:h-full flex flex-col md:flex-row md:items-center p-1 md:p-8 shadow-lg bg-lavender-web">
						<div className=" md:h-20 flex flex-col items-center">
							<Title>GraphiCL</Title>
							<Short>Fullstack & Serverless Boilerplate</Short>
						</div>
						<Profile userId={userId} />
					</div>
					<div className="w-7/12 h-full flex flex-col justify-center items-center p4">
						{children}
					</div>
					<div className="w-2/12 h-full flex flex-col justify-around items-center p-4 shadow-lg bg-lavender-web">
						<Menu />
					</div>
				</div>
			) : (
				<div className="flex flex-row w-screen h-screen justify-between items-center">
					{children}
				</div>
			)}
		</>
	);
};

export default Layout;
