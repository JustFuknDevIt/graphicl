import { useQuery } from "@apollo/client";
import { GET_USERS } from "graphql/client/queries";
import Link from "next/link";

export const Feedback = ({}) => {
	const { loading, error, data } = useQuery(GET_USERS, {
		errorPolicy: "all",
	});
	if (error)
		return (
			<div>
				{error.graphQLErrors.map(({ message }, i) => (
					<span key={i}>{message}</span>
				))}
			</div>
		);
	if (loading) return <div>Loading</div>;

	if (data)
		return (
			<div>
				List of Users :
				{data &&
					data.getUsers.map((user, i) => {
						return <div key={i}>{user.username}</div>;
					})}
				<Link href="/">Go Home</Link>
			</div>
		);
};

export default Feedback;
