import { useAuth } from "components/AuthProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Big } from "components/Typography";
import CardFeature from "components/CardFeature";

const Home = ({}) => {
	const router = useRouter();
	const { authState } = useAuth();

	useEffect(() => {
		if (!authState.isAuth) {
			router.push("/");
		}
	}, [authState.isAuth]);

	return (
		authState.isAuth && (
			<>
				<Big>Build With</Big>
				<div className="h-auto w-full p-4 md:pt-16 flex flex-col md:flex-row md:justify-around overflow-y-auto">
					<div className="h-auto w-full p-2 flex flex-col justify-center items-center">
						<CardFeature name="React" text="used with Hooks and love" />
						<CardFeature name="Next.js" text="as Serverless Framework" />
						<CardFeature name="GraphQL Server" text="like API of the future" />
						<CardFeature name="Apollo" text="For fetching and caching data" />
						<CardFeature name="Passwordless Authentication" text="Based on cookies" />
					</div>

					<div className="h-auto w-full p-2 flex flex-col justify-center items-center">
						<CardFeature name="NodeMailer" text="for send user authentication mail" />
						<CardFeature name="Tailwind" text="To have gloossy UI" />
						<CardFeature name="MongoDB" text="provided by Mongo Atlas Cloud" />
						<CardFeature name="Mongoose" text="as Schema based" />
						<CardFeature name="Avataaars" text="to give you a means of expression" />
					</div>
				</div>
			</>
		)
	);
};

export default Home;
