export const Input = ({ type, name, required, placeholder, minLength, maxLength }) => {
	const matchMoreThanPhone = screen.width >= 768;
	return (
		<input
			type={type}
			name={name}
			required={required}
			placeholder={placeholder}
			minLength={minLength}
			maxLength={maxLength}
			style={!matchMoreThanPhone && { width: "120px" }}
			className="rounded-full py-1 px-3 flex justify-center items-center border-gray-900 shadow-lg"
		/>
	);
};
