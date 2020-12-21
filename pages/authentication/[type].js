import { Big, Regular } from "components/Typography";
import { request, gql } from "graphql-request";
import AuthForm from "components/Forms/AuthForm";
import Cookies from "cookies";
import { useAuth } from "components/AuthProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Authentication = ({ queryType, userId, errorMessage }) => {
	const router = useRouter();
	const { signIn } = useAuth();

	console.log("userId : ", userId);
	console.log("errorMessage : ", errorMessage);

	useEffect(() => {
		if (userId && !errorMessage) {
			signIn(userId);
			router.push("/home");
		}
	}, [userId]);

	return (
		<div className="flex flex-col w-screen h-screen justify-center items-center bg-lavender-blush">
			<div className="flex flex-col w-screen h-screen justify-center items-center">
				<main className="h-2/5 flex flex-col justify-around">
					{queryType === "finish" ? (
						<Big>
							{errorMessage ? (
								<>
									{errorMessage} <br />
									<br />
									<br />
									<Link href="/authentication/signin">Retry to Sign In !</Link>
								</>
							) : (
								"Please wait until the redirect..."
							)}
							<br />
						</Big>
					) : (
						<AuthForm type={queryType} />
					)}
				</main>
			</div>
		</div>
	);
};

export async function getServerSideProps({ req, res, query }) {
	const queryType = query.type;
	const token = query.token ? query.token : null;

	let userId;
	let errorMessage;

	if (token) {
		const Query = gql`
			mutation FinishAuthMutation($temporaryToken: String!) {
				finishAuthUser(temporaryToken: $temporaryToken) {
					token
					expires
					userId
				}
			}
		`;

		const variables = {
			temporaryToken: token,
		};

		try {
			await request("http://localhost:3000/api/graphql", Query, variables).then((payLoad) => {
				const token = payLoad.finishAuthUser.token;
				const expires = payLoad.finishAuthUser.expires;
				const id = payLoad.finishAuthUser.userId;

				const cookies = new Cookies(req, res);
				cookies.set("authToken", token, {
					httpOnly: true, // true by default
					//secure : true,
					//sameSite : strict
				});
				cookies.set("expires", expires, {
					httpOnly: true, // true by default
					//secure : true,
					//sameSite : strict
				});

				return (userId = id);
			});
		} catch (error) {
			errorMessage = JSON.stringify(error.response.errors[0].message, undefined, 2);
		}
	}

	return {
		props: {
			queryType,
			userId: token && !errorMessage ? userId : null,
			errorMessage: errorMessage ? errorMessage : null,
		},
	};
}

export default Authentication;
