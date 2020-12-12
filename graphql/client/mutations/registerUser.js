import gql from "graphql-request";

const REGISTER_USER = gql`
	mutation RegisterUserMutation($email: String!, $username: String!, $godFather: String) {
		registerUser(email: $email, username: $username, godFather: $godFather)
	}
`;

export default REGISTER_USER;
