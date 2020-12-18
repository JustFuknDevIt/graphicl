import { useAuth } from "components/AuthProvider";
import { Title } from "components/Typography/index";
import { AuthLinkButton } from "components/CTA";
import { useRouter } from "next/router";

export default function Home() {
	const { authState } = useAuth();
	const router = useRouter();

	return (
		<>
			{authState.userId == null && (
				<main className="h-2/5 flex flex-col justify-around">
					<Title>Welcome to Graphicl !</Title>
					<div className="flex flex-row justify-around w-full p3">
						<AuthLinkButton link="/authentication/signin">Sign In</AuthLinkButton>
						<AuthLinkButton link="/authentication/register">Register</AuthLinkButton>
					</div>
				</main>
			)}
		</>
	);
}
