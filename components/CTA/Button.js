const Button = ({ children, type }) => {
	return (
		<button
			type={type}
			className="rounded-full py-3 px-6 w-2/6 h-8 flex justify-center items-center bg-orange-default"
		>
			{children}
		</button>
	);
};

export default Button;
