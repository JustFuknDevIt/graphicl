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
