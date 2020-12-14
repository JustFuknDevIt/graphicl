import { useAuth } from "components/AuthProvider";

const Home = ({}) => {
	const { authState } = useAuth();
	const userId = authState.userId;

	return <div>Bienvenue user id : {userId}</div>;
};

export default Home;
