import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "components/AuthProvider";
import { Title, Short } from "components/Typography";
import Profile from "components/Profile";
import Menu from "components/Menu";
import { useEffect } from "react";

const Layout = ({ children }) => {
	const router = useRouter();
	const { authState } = useAuth();
	const isAuth = authState.isAuth;
	const userId = authState.userId;

	const pathname = router.pathname === "/" ? "Welcome" : router.pathname;
	console.log("is auth in layout : ", isAuth);

	useEffect(
		() => {
			if (!isAuth) {
				console.log(
					"You have the layout and you are not logged, you will be instant redirect to '/'"
				);
				router.push("/");
			}
		},
		{ isAuth }
	);

	return (
		<>
			<Head>
				<title>Graphicl - {pathname}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{isAuth && (
				<div className="flex flex-row w-screen h-screen justify-between items-center">
					<div className="w-3/12 h-full flex flex-col items-center p-8 shadow-lg bg-lavender-web">
						<div className="h-20 flex flex-col items-center">
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
			)}
		</>
	);
};

export default Layout;
