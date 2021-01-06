export const Input = ({ type, name, required, placeholder, minLength, maxLength }) => {
	return (
		<input
			type={type}
			name={name}
			required={required}
			placeholder={placeholder}
			minLength={minLength}
			maxLength={maxLength}
			className="rounded-full py-1 px-3 flex justify-center items-center border-gray-900 shadow-lg"
		/>
	);
};
