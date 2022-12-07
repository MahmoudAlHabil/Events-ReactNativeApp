import { createContext, useContext, useState } from "react";

const AllEventsContext = createContext({
    allEvents: [],
    setAllEvents: () => { },
});

export const AllEventsContextProvider = ({ children }) => {
    const [allEvents, setAllEvents] = useState([]);

    return (
        <AllEventsContext.Provider value={{ allEvents, setAllEvents }}>
            {children}
        </AllEventsContext.Provider>
    );
}

export const useAllEventsContext = () => {
    return useContext(AllEventsContext)
}