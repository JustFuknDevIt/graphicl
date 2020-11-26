import bcrypt from "bcryptjs";
import User from "database/models/user";

const resolvers = {
	Query: {
		getUsers: async () => {
			const foundUsers = await User.find();
			return foundUsers;
		},
		getUser: async (_, { email }) => {
			const foundUser = await User.findOne({ email });
			if (!foundUser) throw new Error("no user with this email");
			return foundUser;
		},
	},

	Mutation: {
		registerUser: async (_, { email, name, password }) => {
			const foundUser = await User.findOne({ email });
			if (foundUser) throw new Error("Email already registered");

			const passwordSalt = await bcrypt.genSalt(10);
			const passwordHash = await bcrypt.hash(password, passwordSalt);

			const newUser = await User.create({
				email,
				name,
				passwordHash,
			});

			return newUser;
		},
	},
};

export default resolvers;
