const AuthButton = ({ children, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="rounded-full py-3 px-6 w-4/5 h-30 flex justify-center items-center bg-sideral-light"
		>
			{children}
		</div>
	);
};

export default AuthButton;
