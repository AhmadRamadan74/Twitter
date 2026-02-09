import { createContext, useContext, useState, useEffect } from "react";

const AuthUserContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('user')) {
            setAuthUser(JSON.parse(localStorage.getItem('user')));
        }
        setLoading(false);
    }, []);

    const login = (user) => {
        setAuthUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }
    
    const logout = () => {
        setAuthUser(null);
        localStorage.removeItem('user');
    }

    const updateUser = (userData) => {
        setAuthUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    return (
        <AuthUserContext.Provider value={{authUser, login, logout, updateUser, loading}}>
            {children}
        </AuthUserContext.Provider>
    )
};

export { AuthUserContext };