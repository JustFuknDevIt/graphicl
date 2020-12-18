import { useAuth } from "components/AuthProvider";
import { useRouter } from "next/router";

const Home = ({}) => {
	const { authState } = useAuth();
	const userId = authState.userId;

	if (userId) {
		return <div>Bienvenue user id : {userId}</div>;
	} else {
		return <div>Acces unauthorisez</div>;
	}
};

export default Home;
