import { request, gql } from "graphql-request";
import { Big, Short } from "components/Typography";
import { AuthConfirmButton } from "components/CTA";
import { Input } from "components/Input";
import { useState } from "react";

const AuthForm = ({ type }) => {
	const [message, setMessage] = useState(null);

	const handleSignIn = async (event) => {
		event.preventDefault();
		const { email, username } = event.target.elements;
		console.log({ email: email.value, username: username.value });
	};

	const handleRegister = async (event) => {
		event.preventDefault();
		const { email, username, godFather } = event.target.elements;

		const REGISTER_USER = gql`
			mutation RegisterUserMutation($email: String!, $username: String!, $godFather: String) {
				registerUser(email: $email, username: $username, godFather: $godFather)
			}
		`;
		const variables = {
			email: email.value,
			username: username.value,
			godFather: godFather.value,
		};

		const data = await request("http://localhost:3000/api/graphql", REGISTER_USER, variables).then(
			(res) => {
				let message = res.registerUser;
				setMessage(message);
				return message;
			}
		);

		return data;
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
				<Short>{message}</Short>
			</div>
		</>
	);
};

export default AuthForm;
