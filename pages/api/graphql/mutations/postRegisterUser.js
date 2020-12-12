import User from "database/models/user";
import sendMail from "utils/serverMail";
import getRandomAvatarOptions from "lib/getRandomAvatar";
import { nanoid } from "nanoid";

const postRegisterUser = async (email, username, godFather) => {
	const foundUser = await User.findOne({ email });
	if (foundUser) return "Email already registered";

	const isGodFather = () => {
		if (!godFather) {
			return null;
		} else {
			return godFather;
		}
	};

	const userWallet = {
		balance: 0,
		earnedByClaim: 0,
		earnedByBets: 0,
		earnedByReferals: 0,
	};

	const temporaryToken = nanoid();
	const refreshTokenExpiry = new Date(
		Date.now() + parseInt(process.env.REFRESH_TOKEN_EXPIRY_SHORT) * 1000
	);

	const newUser = await User.create({
		email,
		username,
		userWallet,
		godFather: isGodFather(),
		avatarOptions: await getRandomAvatarOptions(),
		refreshTokens: { hash: temporaryToken, expiry: refreshTokenExpiry },
	});

	const method = "SignUp";
	await sendMail(method, username, email, temporaryToken);

	return newUser
		? "Hey bro ! Check your mail to finish the Signup"
		: "Hummm..someting went wrong your SignUp!";
};

export default postRegisterUser;
