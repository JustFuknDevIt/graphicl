import { useAuth } from "components/AuthProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = ({}) => {
	const router = useRouter();
	const { authState } = useAuth();
	console.log(authState);

	useEffect(() => {
		if (!authState.isAuth) {
			router.push("/");
		}
	});
	return <div>Bienvenue sur Home page de Graphicl</div>;
};

export default Home;
