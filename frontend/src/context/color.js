import { createContext, useContext, useReducer } from "react";

const ColorContext = createContext();

const INITIAL_COLORS = {
    primary: "#28318B",
    text: "#222222",
    textFade1: "#22222299",
    textFade2: "",
};

const reducers = (state, { type, payload }) => {
    switch (type) {
        case "SET_COLORS":
            return {
                ...state,
                ...payload,
            };
    }
};

export const ColorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, INITIAL_COLORS);

    const fetchAndUpdateColors = async () => {
        // do fetching here and update Color config
    };

    return (
        <ColorContext.Provider
            value={{
                colors: state,
                fetchAndUpdateColors,
            }}
        >
            {children}
        </ColorContext.Provider>
    );
};

export const useColor = () => useContext(ColorContext);
