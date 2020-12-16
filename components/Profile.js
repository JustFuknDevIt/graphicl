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

	useEffect(() => {
		if (data) {
			setAvatar(data.getUser.avatarOptions);
			setUsername(data.getUser.username);
			setEmail(data.getUser.email);
		}
	}, [data]);

	if (loading) return <Big>Loading...</Big>;
	if (error) return <Big>{error}</Big>;

	const handleSubmit = async (event, newAvatar) => {
		if (newAvatar) {
			const updatedInput = {
				avatarOptions: newAvatar,
			};
			updateUser({ variables: { userId: userId, input: updatedInput } }).then((response) => {
				const { avatarOptions } = response.data.updateUser;
				avatarOptions && setAvatar(avatarOptions);
			});
		} else {
			event.preventDefault();
			const { email, username } = event.target.elements;
			const updatedInput = {
				username: username.value,
				email: email.value,
			};
			updateUser({ variables: { userId: userId, input: updatedInput } }).then((response) => {
				const { username, email } = response.data.updateUser;
				username && setUsername(username);
				email && setEmail(email);
			});
		}
	};

	return (
		<div className="w-full h-full flex flex-col items-center">
			<div className="my-12 w-full h-full flex flex-col items-center">
				<Avatar
					style={{ width: "150px", height: "150px", marginBottom: "30px" }}
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

				<form
					className="h-full w-full flex flex-col justify-end items-center"
					onSubmit={handleSubmit}
				>
					<div className="h-1/5 w-full flex flex-row justify-end items-end">
						{!editView ? (
							<EditButton onClick={() => setEditView(!editView)} />
						) : (
							<div className="w-1/3 flex flex-row justify-between">
								<CancelButton onClick={() => setEditView(!editView)} />
								<SaveButton />
							</div>
						)}
					</div>
					{!editView ? (
						<div className="h-1/5 flex flex-col items-center justify-around">
							<Big>{username}</Big>
							<Short>{email}</Short>
						</div>
					) : (
						<div className="h-1/5 flex flex-col items-center justify-around">
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
