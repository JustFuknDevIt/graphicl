import User from "database/models/user";
import sendMail from "lib/serverMail";
import { nanoid } from "nanoid";

const postSignInUser = async (email, username) => {
	const foundUser = await User.findOne({ email });
	if (!foundUser) return "Email not exist, please register";
	if (foundUser.username != username) return "user not match with email, please retry !";

	const temporaryToken = nanoid();
	const refreshTokenExpiry = new Date(
		Date.now() + parseInt(process.env.REFRESH_TOKEN_EXPIRY_SHORT) * 1000
	);

	foundUser.refreshTokens.hash = temporaryToken;
	foundUser.refreshTokens.expiry = refreshTokenExpiry;

	const newSignedInUser = await foundUser.save();

	const method = "SignIn";

	await sendMail(method, username, email, temporaryToken);

	return newSignedInUser
		? "Hey bro ! Check your mail to finish the Signin"
		: "Hummm..someting went wrong with your SignIn!";
};

export default postSignInUser;
