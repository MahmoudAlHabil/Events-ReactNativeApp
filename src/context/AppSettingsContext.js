import { createContext, useContext, useReducer } from "react";

const AppSettingsContext = createContext({
    appSettings: {},
    dispatchAppSettings: () => { },
});

const appSettingsReducer = (state, action) => {
    switch (action.type) {
        case "SET_APP_SETTINGS":
            return {
                ...state,
                ...action.payload,
            };
        case "RESET_APP_SETTINGS":
            return {};
        default:
            return state;
    }
};

export const AppSettingsContextProvider = ({ children }) => {
    const [appSettings, dispatchAppSettings] = useReducer(appSettingsReducer, {});


    return (
        <AppSettingsContext.Provider value={{ appSettings, dispatchAppSettings }}>
            {children}
        </AppSettingsContext.Provider>
    );
}

export const useAppSettingsContext = () => {
    return useContext(AppSettingsContext)
}