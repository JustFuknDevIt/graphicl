import Cookies from "cookies";
import User from "database/models/user";
import postRegisterUser from "../mutations/postRegisterUser";
import postSignInUser from "../mutations/postSignInUser";
import postFinishAuthUser from "../mutations/postFinishAuthUser";
import postUpdateUser from "../mutations/postUpdateUser";
import postSignOutUser from "../mutations/postSignOutUser";

const resolvers = {
	Query: {
		getUser: async (_, { userId }, { authToken, isExpired }) => {
			if (!authToken)
				throw new Error("You need to be Auth for this request ! Please sign in and retry !");
			if (isExpired) throw new Error("Your Token is Expired, Please Sign In !");

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
		signOutUser: async (_, { userId }, { req, res }) => {
			const result = await postSignOutUser(userId);

			if (result) {
				const cookies = new Cookies(req, res);
				cookies.set("authToken", "", {
					httpOnly: false,
					expires: new Date(0),
					secure: true,
				});
				cookies.set("expires", "", {
					httpOnly: false,
					expires: new Date(0),
					secure: true,
				});
				cookies;
				return true;
			} else {
				return false;
			}
		},
		updateUser: async (_, { userId, input }, { authToken, isExpired }) => {
			if (!authToken)
				throw new Error("You need to be Auth for this request ! Please sign in and retry !");

			if (isExpired) throw new Error("Your Token is Expired, Please Sign In !");

			const updateUser = await postUpdateUser(userId, input);
			return updateUser;
		},
	},
};

export default resolvers;
