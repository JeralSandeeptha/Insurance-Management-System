import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState({
        username: 'Jeral'
    });

    const values = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn
    };

    return (
        <AppContext.Provider value={values}>
            { children }
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };