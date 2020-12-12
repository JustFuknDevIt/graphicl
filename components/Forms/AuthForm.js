import { Big } from "components/Typography";
import { AuthConfirmButton } from "components/CTA";
import { Input } from "components/Input";

const AuthForm = ({ type }) => {
	const handleSignIn = async (event) => {
		event.preventDefault();
		const { email, username } = event.target.elements;
		console.log({ email: email.value, username: username.value });
	};

	const handleRegister = async (event) => {
		event.preventDefault();
		const { email, username, godFather } = event.target.elements;
		console.log({ email: email.value, username: username.value, godFather: godFather.value });
	};

	const handleSubmit = type === "signin" ? handleSignIn : handleRegister;

	return (
		<>
			<Big>Ready to {type === "signin" ? "Sign In" : type} ?</Big>
			<div className=" w-full h-40 flex flex-col rounded-veryLarge p-6 justify-around items-center">
				<form onSubmit={handleSubmit}>
					<Input type="email" name="email" placeholder="your@mail.com" required />
					<Input type="text" name="username" placeholder="username" required />
					{type === "register" && <Input type="text" name="godFather" placeholder="referal code" />}
					<AuthConfirmButton type="submit">
						{type === "signin" ? "Sign In" : type}
					</AuthConfirmButton>
				</form>
			</div>
		</>
	);
};

export default AuthForm;
