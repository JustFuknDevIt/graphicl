import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const initialAuthState = {
		userId: null,
		isAuth: false,
	};

	const [authState, setAuthState] = useState(initialAuthState);

	useEffect(() => {
		if (localStorage.getItem("userId") !== authState.userId) {
			setAuthState({
				userId: localStorage.getItem("userId"),
				isAuth: localStorage.getItem("isAuth"),
			});
		}
	}, [authState]);

	const signIn = (userId) => {
		setAuthState({
			userId,
			isAuth: true,
		});
		if (typeof window !== "undefined") {
			localStorage.setItem("userId", userId);
			localStorage.setItem("isAuth", true);
		}
	};

	const signOut = () => {
		setAuthState(initialAuthState);
		if (typeof window !== "undefined") {
			localStorage.removeItem("userId");
			localStorage.removeItem("isAuth");
		}
	};

	return (
		<AuthContext.Provider value={{ authState, signIn, signOut }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider as default, useAuth };
