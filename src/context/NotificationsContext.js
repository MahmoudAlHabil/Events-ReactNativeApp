import { createContext, useContext, useReducer } from "react";

const notificationsData = [
    {
        id: 1,
        title: 'بيع و شراء جميع لوازم الأفراح والديكور جديده وقديمه',
        time: '30/10/2022',
        isTouched: false,
    },
    {
        id: 2,
        title: 'بيع و شراده وقديمه',
        time: '29/10/2022',
        isTouched: false,
    },
    {
        id: 3,
        title: 'بيع و شراء جميع لوازم الأفراح والديكور جديده وقديمه',
        time: '28/10/2022',
        isTouched: false,
    },
    {
        id: 4,
        title: 'بيع و شرراح والديكور جديده وقديمه',
        time: '27/10/2022',
        isTouched: false,
    },
    {
        id: 5,
        title: 'بيع و شراء جميع لوازم الأفراح وال وقديمه',
        time: '26/10/2022',
        isTouched: true,
    },
    {
        id: 6,
        title: 'بجديده وقديمه',
        time: '25/10/2022',
        isTouched: true,
    },
]

const NotificationsContext = createContext({
    notifications: [],
    dispatchNotifications: () => { },
});

const notificationsReducer = (state, action) => {
    switch (action.type) {
        case "SET_NOTIFICATIONS":
            return action.payload
        case "READ_NOTIFICATION":
            return state.map(item => item._id === action.payload._id ? { ...item, isTouched: true } : item)
        default:
            return state;
    }
};

export const NotificationsContextProvider = ({ children }) => {
    const [notifications, dispatchNotifications] = useReducer(notificationsReducer, []);


    return (
        <NotificationsContext.Provider value={{ notifications, dispatchNotifications }}>
            {children}
        </NotificationsContext.Provider>
    );
}

export const useNotificationsContext = () => {
    return useContext(NotificationsContext)
}