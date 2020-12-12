const HeaderButton = ({ type }) => {
	return (
		<div className="rounded-full w-9 h-9 flex justify-center items-center bg-white">
			<img src={`/static/svg/${type}.svg`} alt={`${type} SVG`} width={18} height={18} />
		</div>
	);
};

export default HeaderButton;
