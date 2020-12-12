export const Title = ({ children, color }) => {
	return (
		<p
			className={`text-6xl font-Cinzel-Variable-Font tracking-title ${
				color ? color : "text-whiter-light"
			}`}
		>
			{children}
		</p>
	);
};

export const Big = ({ children, color, weight }) => {
	return (
		<p
			className={`text-3xl font-Cinzel-Variable-Font ${
				color ? color : "text-whiter-light"
			} ${weight}`}
		>
			{children}
		</p>
	);
};

export const Normal = ({ children, color }) => {
	return (
		<p className={`text-base font-Cinzel-Variable-Font ${color ? color : "text-whiter-light"}`}>
			{children}
		</p>
	);
};

export const Short = ({ children, color }) => {
	return (
		<p className={`text-xs font-Cinzel-Variable-Font ${color ? color : "text-whiter-light"}`}>
			{children}
		</p>
	);
};
