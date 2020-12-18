import User from "database/models/user";

const postSignOutuser = async (userId) => {
	const foundUser = await User.findById(userId);

	// find matching token in database and filter it out
	if (foundUser) {
		foundUser.authToken = {
			hash: "",
			expiry: new Date(0),
		};

		await foundUser.save();

		return true;
	} else {
		return false;
	}
};

export default postSignOutuser;
