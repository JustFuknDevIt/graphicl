import { useQuery } from "@apollo/client";
import { GET_USERS } from "graphql/client/queries";
import Link from "next/link";
import Layout from "components/Layout";

export const Feedback = ({}) => {
	const { loading, error, data } = useQuery(GET_USERS, {
		errorPolicy: "all",
	});

	return (
		<Layout>
			{error && (
				<div>
					{error.graphQLErrors.map(({ message }, i) => (
						<span key={i}>{message}</span>
					))}
				</div>
			)}
			{loading && <div>Loading</div>}
			{data && (
				<div>
					List of Users :
					{data &&
						data.getUsers.map((user, i) => {
							return <div key={i}>{user.username}</div>;
						})}
					<Link href="/">Go Home</Link>
				</div>
			)}
		</Layout>
	);
};

export default Feedback;
