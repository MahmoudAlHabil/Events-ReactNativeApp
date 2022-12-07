import { createContext, useContext, useState } from "react";

const UserInfoContext = createContext({
    userInfo: [],
    setUserInfo: () => { },
});

export const UserInfoContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState([]);

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
}

export const useUserInfoContext = () => {
    return useContext(UserInfoContext)
}