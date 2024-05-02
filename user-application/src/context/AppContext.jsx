import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({
        _id: null,
        fname: '',
        lname: '',
        age: '',
        address: '',
        mobile: '',
        email: '',
        nic: '',
        createdAt: '',
        updatedAt: ''
    });

    const values = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken
    };

    useEffect(() => {
        try {
          var user = localStorage.getItem('user');
          var token = localStorage.getItem('token');
          var isLoggedIn = localStorage.getItem('isLoggedIn');
          console.log(user);
          if(user) {
            user = JSON.parse(user);
            console.log(user);
            console.log(user._id);
            console.log(user.fname);
            console.log(user.lname);
            console.log(token);
            console.log(isLoggedIn);
            setUser(user);
            setIsLoggedIn(isLoggedIn);
            setToken(token);
          }else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.log(error);
        }
    }, []);
    
    return (
        <AppContext.Provider value={{
            user,
            setUser,
            isLoggedIn,
            setIsLoggedIn,
            token,
            setToken
        }}>
            { children }
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };