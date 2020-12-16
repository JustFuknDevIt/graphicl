import Avatar from "avataaars";

export default ({
	avatarStyle,
	topType,
	accessoriesType,
	hairColor,
	hatColor,
	facialHairType,
	facialHairColor,
	clotheType,
	clotheColor,
	eyeType,
	eyebrowType,
	mouthType,
	skinColor,
}) => {
	return (
		<Avatar
			style={{ width: "100px", height: "100px" }}
			avatarStyle={avatarStyle}
			topType={topType}
			accessoriesType={accessoriesType}
			hairColor={hairColor}
			hatColor={hatColor}
			facialHairType={facialHairType}
			facialHairColor={facialHairColor}
			clotheType={clotheType}
			clotheColor={clotheColor}
			eyeType={eyeType}
			eyebrowType={eyebrowType}
			mouthType={mouthType}
			skinColor={skinColor}
		/>
	);
};
