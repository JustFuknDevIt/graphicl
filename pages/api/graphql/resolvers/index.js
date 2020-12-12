import User from "database/models/user";
import postRegisterUser from "../mutations/postRegisterUser";
import postSignInUser from "../mutations/postSignInUser";
import postFinishAuthUser from "../mutations/postFinishAuthUser";
import postSignOutUser from "../mutations/postSignOutUser";

const resolvers = {
	Query: {
		getUsers: async () => {
			const foundUsers = await User.find();
			return foundUsers;
		},
		getUser: async (_, { userId }) => {
			const foundUser = await User.findOne({ _id: userId });
			if (!foundUser) throw new Error("No User with this ID !");
			return foundUser;
		},
	},

	Mutation: {
		registerUser: async (_, { email, username, godFather }) => {
			const newUser = await postRegisterUser(email, username, godFather);
			return newUser;
		},
		signInUser: async (_, { email, username }) => {
			const newUser = await postSignInUser(email, username);
			return newUser;
		},
		finishAuthUser: async (_, { temporaryToken, setCookie }) => {
			const newUser = await postFinishAuthUser(temporaryToken, setCookie);
			return newUser;
		},
		signOutUser: async (_, { userId, req, setCookie }) => {
			const newUser = await postSignOutUser(userId, req, setCookie);
			return newUser;
		},
	},
};

export default resolvers;
