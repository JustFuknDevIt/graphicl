import User from "database/models/user";
import postRegisterUser from "../mutations/postRegisterUser";
import postSignInUser from "../mutations/postSignInUser";
import postFinishAuthUser from "../mutations/postFinishAuthUser";
import postSignOutUser from "../mutations/postSignOutUser";

const resolvers = {
	Query: {
		getUsers: async (_, {}, { authToken }) => {
			console.log(authToken);
			if (!authToken) {
				throw new Error("You need to be Auth for this request ! Please sign in and retry !");
			}

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
		registerUser: async (_, { email, username }) => {
			const newUser = await postRegisterUser(email, username);
			return newUser;
		},
		signInUser: async (_, { email, username }) => {
			const newUser = await postSignInUser(email, username);
			return newUser;
		},
		finishAuthUser: async (_, { temporaryToken }) => {
			const newUser = await postFinishAuthUser(temporaryToken);
			return newUser;
		},
		signOutUser: async (_, { userId }) => {
			const newUser = await postSignOutUser(userId);
			return newUser;
		},
	},
};

export default resolvers;
