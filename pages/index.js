import { useAuth } from "components/AuthProvider";
import { Title } from "components/Typography/index";
import { AuthLinkButton } from "components/CTA";

export default function Home() {
	const { authState } = useAuth();

	return (
		<>
			{authState.userId == null && (
				<div className="flex flex-col w-screen h-screen justify-center items-center bg-lavender-blush">
					<main className="h-2/5 flex flex-col justify-around">
						<Title>Welcome to Graphicl !</Title>
						<div className="flex flex-row justify-around w-full p3">
							<AuthLinkButton link="/authentication/signin">Sign In</AuthLinkButton>
							<AuthLinkButton link="/authentication/register">Register</AuthLinkButton>
						</div>
					</main>
				</div>
			)}
		</>
	);
}
