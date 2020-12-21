import { useAuth } from "components/AuthProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Big, Title, Short, Regular } from "components/Typography";

const Home = ({}) => {
	const router = useRouter();
	const { authState } = useAuth();

	useEffect(() => {
		if (!authState.isAuth) {
			router.push("/");
		}
	});

	return (
		authState.isAuth && (
			<div className="h-full w-full p-16 flex flex-col justify-between items-center">
				<Title>Welcome to GraphiCL</Title>
				<Big>
					Graphicl is a boilerplate that provides you with all the basics of a serverless
					application
				</Big>
				<Regular>
					It comes with a passwordless authentication system based on cookies and a GraphQL API
					linked to a MongoDB database
				</Regular>
				<Big>
					The application includes a mail server that allows to forward the temporary identification
					token used to authenticate the user
				</Big>
				<Regular>On the front side we find the serverless Next.JS framework with React</Regular>
				<a href="https://twitter.com/JustFuknDevIt">
					<Short>@JustFuknDevIt</Short>
				</a>
			</div>
		)
	);
};

export default Home;
