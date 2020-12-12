import Options from "tools/OptionsAvatar";

const getRandomAvatarOptions = () => {
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	let topType = Options.topType;
	let accessoriesType = Options.accessoriesType;
	let hairColor = Options.hairColor;
	let hatColor = Options.hatColor;
	let facialHairType = Options.facialHairType;
	let facialHairColor = Options.facialHairColor;
	let clotheType = Options.clotheType;
	let clotheColor = Options.clotheColor;
	let eyeType = Options.eyeType;
	let eyebrowType = Options.eyebrowType;
	let mouthType = Options.mouthType;
	let skinColor = Options.skinColor;

	let NumberTopType = getRandomInt(topType.length);
	let NumberAccessoriesType = getRandomInt(accessoriesType.length);
	let NumberHairColor = getRandomInt(hairColor.length);
	let NumberHatColor = getRandomInt(hatColor.length);
	let NumberFacialHairType = getRandomInt(facialHairType.length);
	let NumberFacialHairColor = getRandomInt(facialHairColor.length);
	let NumberClotheType = getRandomInt(clotheType.length);
	let NumberClotheColor = getRandomInt(clotheColor.length);
	let NumberEyeType = getRandomInt(eyeType.length);
	let NumberEyebrowType = getRandomInt(eyebrowType.length);
	let NumberMouthType = getRandomInt(mouthType.length);
	let NumberSkinColor = getRandomInt(skinColor.length);

	const AvatarOptions = {
		topType: topType[NumberTopType],
		accessoriesType: accessoriesType[NumberAccessoriesType],
		hairColor: hairColor[NumberHairColor],
		hatColor: hatColor[NumberHatColor],
		facialHairType: facialHairType[NumberFacialHairType],
		facialHairColor: facialHairColor[NumberFacialHairColor],
		clotheType: clotheType[NumberClotheType],
		clotheColor: clotheColor[NumberClotheColor],
		eyeType: eyeType[NumberEyeType],
		eyebrowType: eyebrowType[NumberEyebrowType],
		mouthType: mouthType[NumberMouthType],
		skinColor: skinColor[NumberSkinColor],
	};

	return AvatarOptions;
};

export default getRandomAvatarOptions;
