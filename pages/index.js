import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_USERS } from "graphql/client/queries";
import { useAuth } from "components/AuthProvider";
import { Title, Big } from "components/Typography/index";
import { AuthLinkButton } from "components/CTA";

export default function Home() {
	const { authState } = useAuth();
	const { loading, error, data } = useQuery(GET_USERS, {
		errorPolicy: "all",
		fetchPolicy: "cache-only",
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

	return (
		<>
			{authState.userId == null ? (
				<main className="h-2/5 flex flex-col justify-around">
					<Title>Welcome to Graphicl !</Title>
					<div className="flex flex-row justify-around w-full p3">
						<AuthLinkButton link="/authentication/signin">Sign In</AuthLinkButton>
						<AuthLinkButton link="/authentication/register">Register</AuthLinkButton>
					</div>
				</main>
			) : (
				<main className="h-2/5 flex flex-col justify-around">
					<Title>Welcome to Graphicl !</Title>
					<Big>Your are already Logged</Big>
					<div className="flex flex-row justify-around w-full p3">
						<AuthLinkButton link="/home">Go Home</AuthLinkButton>
					</div>
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
				</main>
			)}
		</>
	);
}
