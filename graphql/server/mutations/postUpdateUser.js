import User from "database/models/user";

const postUpdateUser = async (userId, input) => {
	const udpateUser = await User.findOneAndUpdate({ _id: userId }, input, {
		new: true,
	});

	return udpateUser;
};

export default postUpdateUser;
