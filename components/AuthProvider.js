import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const initialAuthState = {
		userId: undefined,
	};

	const [authState, setAuthState] = useState(initialAuthState);

	useEffect(() => {
		if (localStorage.getItem("userId") !== authState.userId) {
			setAuthState({
				userId: localStorage.getItem("userId"),
			});
		}
	}, [authState]);

	const signIn = (userId) => {
		setAuthState({
			userId,
		});
		if (typeof window !== "undefined") {
			localStorage.setItem("userId", userId);
		}
	};

	const signOut = () => {
		setAuthState(initialAuthState);
		if (typeof window !== "undefined") {
			localStorage.removeItem("userId");
		}
	};

	return (
		<AuthContext.Provider value={{ authState, signIn, signOut }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider as default, useAuth };
