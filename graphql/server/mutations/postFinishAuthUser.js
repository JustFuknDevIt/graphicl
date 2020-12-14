import { nanoid } from "nanoid";
import User from "database/models/user";

const postFinishAuthUser = async (temporaryToken) => {
	const foundUser = await User.findOne({ "authToken.hash": temporaryToken });

	if (!foundUser) throw new Error("Fail to find User with this token.");

	let isAuthTokenValid = false;

	const isMatch = temporaryToken === foundUser.authToken.hash ? true : false;
	const isValid = foundUser.authToken.expiry > Date.now();

	if (isMatch && isValid) {
		isAuthTokenValid = true;
	}

	if (!isAuthTokenValid) throw new Error("Invalid Auth token");

	const authToken = nanoid(42);
	const authTokenExpiry = new Date(
		Date.now() + parseInt(process.env.AUTH_TOKEN_EXPIRY_LONG) * 1000
	);

	foundUser.authToken.hash = authToken;
	foundUser.authToken.expiry = authTokenExpiry;

	await foundUser.save();

	return { token: authToken, expires: authTokenExpiry, userId: foundUser._id };
};

export default postFinishAuthUser;
