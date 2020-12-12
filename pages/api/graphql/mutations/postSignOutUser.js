import User from "database/models/user";

const postSignOutuser = async (userId, req, setCookies) => {
	{
		/*
	const foundUser = await User.findById(userId);
	const { refreshToken } = req.cookies;

	// find matching token in database and filter it out
	foundUser.refreshTokens = refreshToken === foundUser.refreshTokens.hash && {
		hash: "",
		expiry: new Date(0),
	};

	await foundUser.save();

	// Send the same cookie options as on signin but expiry in the past
	setCookies.push({
		name: "refreshToken",
		value: req.cookies.refreshToken,
		options: {
			...REFRESH_TOKEN_COOKIE_OPTIONS,
			expires: new Date(0),
		},
	});
	return true;
	*/
	}
};

export default postSignOutuser;
