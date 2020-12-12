import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "database/models/user";

const postFinishAuthUser = async (temporaryToken, setCookies) => {
	{
		/*
	const foundUser = await User.findOne({ "refreshTokens.hash": temporaryToken });

	if (!foundUser) throw new Error("Fail to find User with this token.");

	let isRefreshTokenValid = false;

	const isMatch = temporaryToken === foundUser.refreshTokens.hash ? true : false;
	const isValid = foundUser.refreshTokens.expiry > Date.now();

	if (isMatch && isValid) {
		isRefreshTokenValid = true;
	}

	if (!isRefreshTokenValid) throw new Error("Invalid refresh token");

	const payload = {
		user: {
			id: foundUser.id,
		},
	};

	const token = await jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: parseInt(process.env.JWT_EXPIRY),
	});

	const refreshToken = nanoid();
	const refreshTokenExpiry = new Date(
		Date.now() + parseInt(process.env.REFRESH_TOKEN_EXPIRY_LONG) * 1000
	);

	const salt = await bcrypt.genSalt(10);
	const refreshTokenHash = await bcrypt.hash(refreshToken, salt);

	foundUser.refreshTokens.hash = refreshTokenHash;
	foundUser.refreshTokens.expiry = refreshTokenExpiry;

	await foundUser.save();

	setCookies.push({
		name: "refreshToken",
		value: refreshToken,
		options: {
			...REFRESH_TOKEN_COOKIE_OPTIONS,
			expires: refreshTokenExpiry,
		},
	});

	return { userId: foundUser._id, token };
	*/
	}
};

export default postFinishAuthUser;
