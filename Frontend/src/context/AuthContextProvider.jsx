import { createContext,useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}){

    const [AuthDetails, setAuthDetails] = useState({
        islogDin : false,
        token : null
    })

    const login = (token) =>{
        setAuthDetails({
            islogDin : true,
            token : token,
        })
    }

    const logout = ()=>{
        setAuthDetails({
            islogDin : false,
            token : null
        })
    }


    return (<>
    <AuthContext.Provider value={{AuthDetails,login, logout}}>

        {children}
    </AuthContext.Provider>
    </>)
}