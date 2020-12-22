import User from "database/models/user";
import sendMail from "lib/serverMail";
import { nanoid } from "nanoid";

const postSignInUser = async (email, username) => {
	const foundUser = await User.findOne({ email });
	if (!foundUser) return "Email not exist, please register";
	if (foundUser.username != username) return "user not match with email, please retry !";

	const authToken = nanoid();
	const authTokenExpiry = new Date(
		Date.now() + parseInt(process.env.AUTH_TOKEN_EXPIRY_SHORT) * 1000
	);

	console.log("authTokenExpiry sign In : ", authTokenExpiry);
	foundUser.authToken.hash = authToken;
	foundUser.authToken.expiry = authTokenExpiry;

	const newSignedInUser = await foundUser.save();

	const method = "SignIn";

	await sendMail(method, username, email, authToken);

	return newSignedInUser
		? "Hey bro ! Check your mail to finish the Signin"
		: "Hummm..someting went wrong with your SignIn!";
};

export default postSignInUser;
