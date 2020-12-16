import { gql } from "@apollo/client";

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
