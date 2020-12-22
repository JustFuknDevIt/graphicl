import { gql } from "@apollo/client";

export const SIGNIN_USER = gql`
	mutation SignInUserMutation($email: String!, $username: String!) {
		signInUser(email: $email, username: $username)
	}
`;
export const REGISTER_USER = gql`
	mutation RegisterUserMutation($email: String!, $username: String!) {
		registerUser(email: $email, username: $username)
	}
`;

export const UPDATE_USER = gql`
	mutation PostUpdateUser($userId: ID!, $input: UpdateUserInput) {
		updateUser(userId: $userId, input: $input) {
			username
			email
			avatarOptions {
				topType
				accessoriesType
				hairColor
				hatColor
				facialHairType
				facialHairColor
				clotheType
				clotheColor
				eyeType
				eyebrowType
				mouthType
				skinColor
			}
		}
	}
`;
export const SIGNOUT_USER = gql`
	mutation PostSignOutUser($userId: ID!) {
		signOutUser(userId: $userId)
	}
`;
