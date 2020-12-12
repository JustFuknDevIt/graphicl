export const Input = ({ type, name, required, placeholder, minLength, maxLength }) => {
	return (
		<input
			type={type}
			name={name}
			required={required}
			placeholder={placeholder}
			minLength={minLength}
			maxLength={maxLength}
			className="w-3/5 h-8 bg-gray-200  rounded-full p-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
		/>
	);
};
