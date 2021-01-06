import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "graphql/client/queries";
import { UPDATE_USER } from "graphql/client/mutations";
import { Big, Short } from "components/Typography";
import Avatar from "avataaars";
import { useEffect, useState } from "react";
import getRandomAvatarOptions from "lib/getRandomAvatar";
import { RandomizeButton, EditButton, SaveButton, CancelButton } from "components/CTA";
import { Input } from "components/Input";

const Profile = ({ userId }) => {
	const matchMoreThanPhone = screen.width >= 768;
	console.log("matchMoreThanPhone ? ", matchMoreThanPhone);

	const [updateUser] = useMutation(UPDATE_USER);
	const { loading, error, data } = useQuery(GET_USER, {
		variables: { userId: userId },
		errorPolicy: "all",
	});
	const [avatar, setAvatar] = useState(
		data ? data.getUser.avatarOptions : getRandomAvatarOptions()
	);
	const [username, setUsername] = useState(data ? data.getUser.username : "username");
	const [email, setEmail] = useState(data ? data.getUser.email : "email");
	const [editView, setEditView] = useState(false);

	const handleSubmit = async (event, newAvatar) => {
		event.preventDefault();

		const updatedInput = newAvatar
			? { avatarOptions: newAvatar }
			: {
					username: event.target.elements.username.value,
					email: event.target.elements.email.value,
			  };

		updateUser({ variables: { userId: userId, input: updatedInput } }).then((response) => {
			const { avatarOptions, username, email } = response.data.updateUser;
			setAvatar(avatarOptions);
			setUsername(username);
			setEmail(email);
			setEditView(editView && !editView);
		});
	};

	useEffect(() => {
		if (data) {
			setAvatar(data.getUser.avatarOptions);
			setUsername(data.getUser.username);
			setEmail(data.getUser.email);
		}
	}, [data]);

	if (loading) return <Big>Loading...</Big>;
	if (error) return <Big>{error}</Big>;

	return (
		<div className="w-full h-full flex flex-col md:items-center">
			<div className="md:my-12 w-full h-full flex flex-row md:flex-col justify-between md:items-center">
				<div className="flex flex-col md:flex-row items-center w-2/4">
					<Avatar
						style={
							matchMoreThanPhone
								? { width: "150px", height: "150px", marginBottom: "30px" }
								: { width: "50px", height: "50px", marginBottom: "10px" }
						}
						avatarStyle={"Transparent"}
						topType={avatar.topType}
						accessoriesType={avatar.accessoriesType}
						hatColor={avatar.hatColor}
						hairColor={avatar.hairColor}
						facialHairType={avatar.facialHairType}
						facialHairColor={avatar.facialHairColor}
						clotheType={avatar.clotheType}
						clotheColor={avatar.clotheColor}
						eyeType={avatar.eyeType}
						eyebrowType={avatar.eyebrowType}
						mouthType={avatar.mouthType}
						skinColor={avatar.skinColor}
					/>
					<RandomizeButton onClick={() => setAvatar(getRandomAvatarOptions())}>
						Randomize
					</RandomizeButton>
					<RandomizeButton onClick={() => handleSubmit(event, avatar)}>Save</RandomizeButton>
				</div>
				<form
					className="md:h-full w-3/5 md:w-full flex flex-row-reverse md:flex-col justify-end items-center"
					onSubmit={handleSubmit}
				>
					<div className="md:h-1/5 w-full flex flex-col md:flex-row justify-end items-end">
						{!editView ? (
							<EditButton onClick={() => setEditView(!editView)} />
						) : (
							<div className="w-2/3 md:w-1/3 flex flex-col md:flex-row justify-around md:justify-between">
								<CancelButton onClick={() => setEditView(!editView)} />
								<SaveButton />
							</div>
						)}
					</div>
					{!editView ? (
						<div className="md:h-1/5 flex flex-col items-center justify-around">
							<Big>{username}</Big>
							<Short>{email}</Short>
						</div>
					) : (
						<div className="md:h-1/5 flex flex-col items-center justify-around">
							<Input type="text" name="username" placeholder={username} required />
							<Input type="email" name="email" placeholder={email} required />
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Profile;
