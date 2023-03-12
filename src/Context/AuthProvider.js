import { createContext } from "react";

export const authcontext = createContext(null)

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
     const allContexts = {
        
     }
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;