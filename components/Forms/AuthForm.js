import { request, gql } from "graphql-request";
import { Big, Short } from "components/Typography";
import { AuthConfirmButton } from "components/CTA";
import { Input } from "components/Input";
import { useState } from "react";

const AuthForm = ({ type }) => {
	const [message, setMessage] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { email, username } = event.target.elements;

		const SIGNIN_USER = gql`
			mutation SignInUserMutation($email: String!, $username: String!) {
				signInUser(email: $email, username: $username)
			}
		`;
		const REGISTER_USER = gql`
			mutation RegisterUserMutation($email: String!, $username: String!) {
				registerUser(email: $email, username: $username)
			}
		`;

		const Query = type === "signin" ? SIGNIN_USER : REGISTER_USER;

		const variables = {
			email: email.value,
			username: username.value,
		};

		const data = await request("http://localhost:3000/api/graphql", Query, variables).then(
			(res) => {
				let message = type === "signin" ? res.signInUser : res.registerUser;
				setMessage(message);
				return message;
			}
		);
		return data;
	};

	return (
		<>
			<Big>Ready to {type === "signin" ? "Sign In" : type} ?</Big>
			<div className=" w-full h-40 flex flex-col rounded-veryLarge p-6 justify-around items-center">
				<form onSubmit={handleSubmit}>
					<Input type="email" name="email" placeholder="your@mail.com" required />
					<Input type="text" name="username" placeholder="username" required />
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
