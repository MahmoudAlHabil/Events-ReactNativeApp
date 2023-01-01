import { createContext, useContext, useState } from "react";

const InterestsContext = createContext({
    interests: [],
    setInterests: () => { },
});

export const InterestsContextProvider = ({ children }) => {
    const [interests, setInterests] = useState([]);
    console.log({interests})
    return (
        <InterestsContext.Provider value={{ interests, setInterests }}>
            {children} 
        </InterestsContext.Provider>
    );
}

export const useInterestsContext = () => {
    return useContext(InterestsContext)
}