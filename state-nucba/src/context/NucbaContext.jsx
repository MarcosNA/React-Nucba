import { useState, createContext } from "react";

const NucbaContext = createContext( {} )

export const NucbaContextProvider = ( {children} ) =>{

    const [stateCar, setStateCar] = useState (false)
    const [contar, setContar] = useState (0)
    const [showUser, setShowUser] = useState (false)
    const [headerInfo, setHeaderInfo] = useState (false)


    return  <NucbaContext.Provider value = { {
        stateCar, 
        setStateCar, 
        contar,
        setContar,
        showUser,
        setShowUser,
        headerInfo, 
        setHeaderInfo

    }}>
        {children}

    </NucbaContext.Provider>
}

export default NucbaContext