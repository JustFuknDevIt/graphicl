import { Short } from "./Typography";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNOUT_USER } from "graphql/client/mutations";
import { useAuth } from "components/AuthProvider";
import { useRouter } from "next/router";

const Switch = () => {
	const router = useRouter();
	const { authState, signOut } = useAuth();
	const [signOutUser] = useMutation(SIGNOUT_USER);
	const [toggleLogout, setToggleLogout] = useState(authState.isAuth);

	const handleToggle = async () => {
		if (toggleLogout) {
			setToggleLogout(!toggleLogout);
			setTimeout(() => {
				signOutUser({ variables: { userId: authState.userId } }).then((response) => {
					const isLogout = response.data.signOutUser;
					if (isLogout) {
						signOut();
					}
				});
			}, 1000);
			router.push("/");
		} else {
			setToggleLogout(!toggleLogout);
		}
	};

	return (
		<div className="flex flex-row justify-between items-center w-full">
			<Short color={toggleLogout && "text-gunmetal-nopacity"}>Signed In</Short>
			<div
				onClick={() => handleToggle()}
				className={`w-16 h-4 flex items-center bg-gray-300 rounded-full p-1 duration-1000 ease-in-out ${
					!toggleLogout ? "bg-gray-300" : "bg-green-100"
				}`}
			>
				<div
					className={`bg-white w-8 h-8 rounded-full shadow-md transform duration-1000 ease-in-out ${
						!toggleLogout && "translate-x-6"
					} `}
				/>
			</div>
			<Short color={!toggleLogout && "text-gunmetal-nopacity"}>Logout</Short>
		</div>
	);
};

export default Switch;
