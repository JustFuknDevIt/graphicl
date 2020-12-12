import { Big } from "components/Typography";
import AuthForm from "components/Forms/AuthForm";

const Authentication = ({ queryType, token }) => {
	return (
		<div className="flex flex-col w-screen h-screen justify-center items-center">
			<main className="h-2/5 flex flex-col justify-around">
				{queryType === "finish" ? (
					<Big>
						Please wait until the redirect...
						<br /> {token}
					</Big>
				) : (
					<AuthForm type={queryType} />
				)}
			</main>
		</div>
	);
};

export async function getServerSideProps(context) {
	const queryType = context.query.type;
	const token = context.query.token ? context.query.token : null;

	// make the verification of the token
	// send cookies and redirect user
	return {
		props: { queryType, token },
	};
}

export default Authentication;
