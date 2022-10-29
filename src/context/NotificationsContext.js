import { createContext, useContext, useReducer } from "react";

const notificationsData = [
    {
        id: 1,
        title: 'بيع و شراء جميع لوازم الأفراح والديكور جديده وقديمه',
        time: '30/10/2022',
        touched: false,
    },
    {
        id: 2,
        title: 'بيع و شراده وقديمه',
        time: '29/10/2022',
        touched: false,
    },
    {
        id: 3,
        title: 'بيع و شراء جميع لوازم الأفراح والديكور جديده وقديمه',
        time: '28/10/2022',
        touched: false,
    },
    {
        id: 4,
        title: 'بيع و شرراح والديكور جديده وقديمه',
        time: '27/10/2022',
        touched: false,
    },
    {
        id: 5,
        title: 'بيع و شراء جميع لوازم الأفراح وال وقديمه',
        time: '26/10/2022',
        touched: true,
    },
    {
        id: 6,
        title: 'بجديده وقديمه',
        time: '25/10/2022',
        touched: true,
    },
]

const NotificationsContext = createContext({
    notifications: notificationsData,
    dispatchNotifications: () => { },
});

const notificationsReducer = (state, action) => {
    switch (action.type) {
        case "SET_NOTIFICATIONS":
            return [...state, action.payload]
        case "READ_NOTIFICATION":
            state[action.payload.id].touched = true
            return [...state]
        default:
            return state;
    }
};

export const NotificationsContextProvider = ({ children }) => {
    const [notifications, dispatchNotifications] = useReducer(notificationsReducer, [...notificationsData]);


    return (
        <NotificationsContext.Provider value={{ notifications, dispatchNotifications }}>
            {children}
        </NotificationsContext.Provider>
    );
}

export const useNotificationsContext = () => {
    return useContext(NotificationsContext)
}