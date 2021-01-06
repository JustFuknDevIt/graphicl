import Link from "next/link";

export const AuthLinkButton = ({ children, link }) => {
	return (
		<Link href={link}>
			<a className="rounded-full py-3 px-6  h-8 flex justify-center items-center border-gray-900 shadow">
				{children}
			</a>
		</Link>
	);
};

export const AuthConfirmButton = ({ children, type }) => {
	return (
		<button
			type={type}
			className="rounded-full py-3 px-6 w-4/5 h-30 flex justify-center items-center bg-gray-100"
		>
			{children}
		</button>
	);
};

export const RandomizeButton = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="rounded-full py-1 md:py-3 px-2 md:px-6 flex justify-center items-center bg-lavender-default border-gray-900 shadow-lg"
		>
			{children}
		</button>
	);
};

export const EditButton = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className="rounded-full h-6 w-6 flex items-center justify-center bg-lavender-default  border-gray-900 shadow-lg"
		>
			<img src="/static/svg/edition.svg" alt="Edit profile" width={16} height={16} />
		</button>
	);
};
export const SaveButton = ({}) => {
	return (
		<button
			type="submit"
			className="rounded-full h-6 w-6 flex items-center justify-center bg-button-save  border-gray-900 shadow-lg"
		>
			<img src="/static/svg/save.svg" alt="save profile" width={16} height={16} />
		</button>
	);
};
export const CancelButton = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className="rounded-full h-6 w-6 flex items-center justify-center bg-button-cancel  border-gray-900 shadow-lg"
		>
			<img src="/static/svg/cancel.svg" alt="cancel profile" width={16} height={16} />
		</button>
	);
};
