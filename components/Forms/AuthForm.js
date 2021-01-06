import { useMutation } from "@apollo/client";
import { Big, Short } from "components/Typography";
import { SIGNIN_USER, REGISTER_USER } from "graphql/client/mutations";
import { AuthConfirmButton } from "components/CTA";
import { Input } from "components/Input";
import { useState } from "react";

const AuthForm = ({ type }) => {
	const [message, setMessage] = useState(null);
	const [signInUser] = useMutation(SIGNIN_USER);
	const [registerUser] = useMutation(REGISTER_USER);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { email, username } = event.target.elements;
		const Query =
			type === "signin"
				? signInUser({ variables: { email: email.value, username: username.value } }).then(
						(res) => {
							let message = res.data.signInUser;
							setMessage(message);
							return message;
						}
				  )
				: registerUser({ variables: { email: email.value, username: username.value } }).then(
						(res) => {
							let message = res.data.registerUser;
							setMessage(message);
							return message;
						}
				  );

		return Query;
	};

	return (
		<>
			<Big>Ready to {type === "signin" ? "Sign In" : type} ?</Big>
			<div className="w-full h-full flex flex-col justify-between">
				<form
					className="w-full h-full flex flex-col p-6 justify-around items-center"
					onSubmit={handleSubmit}
				>
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
