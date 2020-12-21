import { Regular, Short } from "./Typography";

const CardFeature = ({ name, text }) => {
	return (
		<div className="w-3/4 h-auto p-3 mb-4 rounded-md shadow-lg flex flex-col justify-center items-center hover:bg-lavender-blush">
			<Regular>{name}</Regular>
			<Short>-</Short>
			<Short>{text}</Short>
		</div>
	);
};

export default CardFeature;
