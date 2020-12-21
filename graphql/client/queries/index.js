import { gql } from "@apollo/client";

export const GET_USER = gql`
	query GetUserQuery($userId: ID!) {
		getUser(userId: $userId) {
			username
			createdDate
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
