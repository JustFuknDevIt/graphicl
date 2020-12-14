import User from "database/models/user";
import sendMail from "lib/serverMail";
import getRandomAvatarOptions from "lib/getRandomAvatar";
import { nanoid } from "nanoid";

const postRegisterUser = async (email, username) => {
	const foundUser = await User.findOne({ email });
	if (foundUser) return "Email already registered";

	const authToken = nanoid();
	const authTokenExpiry = new Date(
		Date.now() + parseInt(process.env.AUTH_TOKEN_EXPIRY_SHORT) * 1000
	);

	const newUser = await User.create({
		email,
		username,
		avatarOptions: await getRandomAvatarOptions(),
		authToken: { hash: authToken, expiry: authTokenExpiry },
	});

	const method = "SignUp";
	await sendMail(method, username, email, authToken);

	return newUser
		? "Hey bro ! Check your mail to finish the Signup"
		: "Hummm..someting went wrong your SignUp!";
};

export default postRegisterUser;
