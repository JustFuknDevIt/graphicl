import { useQuery } from "@apollo/client";
import { GET_USERS } from "graphql/client/queries";
import { useAuth } from "components/AuthProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export const Feedback = ({}) => {
	const router = useRouter();
	const { authState } = useAuth();
	const { loading, error, data } = useQuery(GET_USERS, {
		errorPolicy: "all",
	});
	useEffect(() => {
		if (!authState.isAuth) {
			router.push("/");
		}
	});

	error && (
		<div>
			{error.graphQLErrors.map(({ message }, i) => (
				<span key={i}>{message}</span>
			))}
		</div>
	);
	loading && <div>Loading</div>;

	return (
		data & authState.isAuth && (
			<>
				{data.getUsers.map((user, i) => {
					return <div key={i}>{user.username}</div>;
				})}
				<Link href="/">Go Home</Link>
			</>
		)
	);
};

export default Feedback;
