export const Title = ({ children, color }) => {
	return (
		<p
			className={`text-xl md:text-4xl font-Cinzel-Variable-Font tracking-title ${
				color ? color : "text-gunmetal-deep"
			}`}
		>
			{children}
		</p>
	);
};

export const Big = ({ children, color, weight }) => {
	return (
		<p
			className={`text-center text-lg md:text-3xl font-Cinzel-Variable-Font ${
				color ? color : "text-gunmetal-deep"
			} ${weight}`}
		>
			{children}
		</p>
	);
};

export const Regular = ({ children, color }) => {
	return (
		<p
			className={`text-center text-base font-Cinzel-Variable-Font ${
				color ? color : "text-gunmetal-deep"
			}`}
		>
			{children}
		</p>
	);
};

export const Short = ({ children, color }) => {
	return (
		<p
			className={`text-center text-xs md:text-sm font-Cinzel-Variable-Font ${
				color ? color : "text-gunmetal-deep"
			}`}
		>
			{children}
		</p>
	);
};
