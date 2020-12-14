import { Big } from "components/Typography";
import { request, gql } from "graphql-request";
import AuthForm from "components/Forms/AuthForm";
import Cookies from "cookies";

const Authentication = ({ queryType, userId }) => {
	console.log("userId outside get server side : ");
	console.log(userId);

	return (
		<div className="flex flex-col w-screen h-screen justify-center items-center">
			<main className="h-2/5 flex flex-col justify-around">
				{queryType === "finish" ? (
					<Big>
						Please wait until the redirect...
						<br />
					</Big>
				) : (
					<AuthForm type={queryType} />
				)}
			</main>
		</div>
	);
};

export async function getServerSideProps({ req, res, query }) {
	const queryType = query.type;
	const token = query.token ? query.token : null;

	let userId;

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

		await request("http://localhost:3000/api/graphql", Query, variables).then((payLoad) => {
			console.log("payload in authpayload : ");
			console.log(payLoad);

			const token = payLoad.finishAuthUser.token;
			const expires = payLoad.finishAuthUser.expires;
			const id = payLoad.finishAuthUser.userId;

			const cookies = new Cookies(req, res);
			cookies.set("authToken", token, {
				httpOnly: true, // true by default
				expires: new Date(expires),
				//secure : true,
				//sameSite : strict
			});

			return (userId = id);
		});
	}

	return {
		props: { queryType, userId: token ? userId : null },
	};
}

export default Authentication;