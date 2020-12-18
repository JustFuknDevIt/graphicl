import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	createdDate: {
		type: Date,
		default: Date.now,
		required: true,
	},
	authToken: {
		hash: {
			type: String,
		},
		expiry: {
			type: Date,
		},
	},
	avatarOptions: {
		type: Object,
		required: true,
	},
	feedback: {
		type: String,
		default: null,
	},
});

export default mongoose.models.user || mongoose.model("user", UserSchema);
