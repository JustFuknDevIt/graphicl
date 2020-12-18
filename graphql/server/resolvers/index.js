import Cookies from "cookies";
import User from "database/models/user";
import postRegisterUser from "../mutations/postRegisterUser";
import postSignInUser from "../mutations/postSignInUser";
import postFinishAuthUser from "../mutations/postFinishAuthUser";
import postUpdateUser from "../mutations/postUpdateUser";
import postSignOutUser from "../mutations/postSignOutUser";

const resolvers = {
	Query: {
		getUsers: async (_, {}, { authToken }) => {
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
		signOutUser: async (_, { userId }, { authToken, req, res }) => {
			if (!authToken) {
				throw new Error("You are not logged. Please Sign In !");
			}
			const result = await postSignOutUser(userId);

			if (result) {
				const cookies = new Cookies(req, res);
				cookies.set("authToken", "", {
					httpOnly: true, // true by default
					expires: new Date(0),
					//secure : true,
					//sameSite : strict
				});
				cookies.set("expires", "", {
					httpOnly: true, // true by default
					expires: new Date(0),
					//secure : true,
					//sameSite : strict
				});
				cookies;
				return true;
			} else {
				return false;
			}
		},
		updateUser: async (_, { userId, input }, { authToken }) => {
			if (!authToken) {
				throw new Error("You need to be Auth for this request ! Please sign in and retry !");
			}

			const updateUser = await postUpdateUser(userId, input);
			return updateUser;
		},
	},
};

export default resolvers;
