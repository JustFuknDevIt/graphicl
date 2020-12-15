import { gql, useQuery } from "@apollo/client";

export const Feedback = ({}) => {
	const GET_USERS = gql`
		query getUsers {
			getUsers {
				username
				createdDate
				email
				avatarOptions {
					topType
					hairColor
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_USERS, { errorPolicy: "all" });
	if (error)
		return (
			<div>
				{error.graphQLErrors.map(({ message }, i) => (
					<span key={i}>{message}</span>
				))}
			</div>
		);
	if (loading) return <div>Loading</div>;

	console.log(data);

	return <div>Hello There {data.getUsers[0].username}!</div>;
};

export default Feedback;
