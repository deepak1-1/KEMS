"use client";
import {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { Spin } from "antd";

const UserContext = createContext();

const INITIAL_STATE = {
    isAuthenticated: false,
    user: {},
};

const reducers = (state, { type, payload }) => {
    switch (type) {
        case "SET_USER": {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    ...state,
                    isAuthenticated: true,
                    user: { ...state.user, ...payload },
                })
            );
            return {
                ...state,
                isAuthenticated: true,
                user: { ...state.user, ...payload },
            };
        }
        case "CLEAR_USER":
            localStorage.setItem("user", JSON.stringify({}));
            return {
                ...state,
                isAuthenticated: false,
                user: {},
            };
    }
};

export const UserProvider = ({ unprotectedPaths, children }) => {
    const [state, dispatch] = useReducer(reducers, INITIAL_STATE);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const { isAuthenticated } = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && unprotectedPaths.includes(pathname)) {
            router.push("/");
        }
        if (isAuthenticated) {
            dispatch({ type: "SET_USER", payload: { user: { id: 30 } } });
            setLoading(false);
            return;
        }
        if (!unprotectedPaths.includes(pathname)) {
            router.push("/login");
        }
        setLoading(false);
    }, []);

    const login = ({ username, password }) => {
        try {
            if (username.trim().length > 0 && password.trim().length >= 4) {
                toast.success("Login successful");
                dispatch({ type: "SET_USER", payload: { user: { id: 30 } } });
                return true;
            }
        } catch (error) {
            console.log({ error });
            toast.error("Something went wrong");
            return false;
        }
    };

    const logout = () => {
        toast.warning("Logged out");
        router.push("/login");
        dispatch({ type: "CLEAR_USER" });
        return true;
    };

    if (loading) return <Spin />;

    if (!unprotectedPaths.includes(pathname) && !state.isAuthenticated) {
        return null;
    }

    return (
        <UserContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
