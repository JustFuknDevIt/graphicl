import { useQuery } from "@apollo/client";
import { GET_USER } from "graphql/client/queries";
import { Big, Short } from "components/Typography";
import Avatar from "avataaars";
import { useEffect, useState } from "react";
import getRandomAvatarOptions from "lib/getRandomAvatar";
import { RandomizeButton, EditButton, SaveButton, CancelButton } from "components/CTA";
import { Input } from "components/Input";

const Profile = ({ userId }) => {
	const { loading, error, data } = useQuery(GET_USER, {
		variables: { userId: userId },
		errorPolicy: "all",
	});

	const [avatar, setAvatar] = useState(
		data ? data.getUser.avatarOptions : getRandomAvatarOptions()
	);
	const [editView, setEditView] = useState(false);

	useEffect(() => {
		if (data) setAvatar(data.getUser.avatarOptions);
	}, [data]);

	if (loading) return <Big>Loading...</Big>;
	if (error) return <Big>{error}</Big>;

	if (data) {
		const { username, email } = data.getUser;

		const handleSubmit = async (event) => {
			event.preventDefault();
			const { email, username } = event.target.elements;

			console.log(username.value);
			console.log(email.value);
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
	}
};

export default Profile;
