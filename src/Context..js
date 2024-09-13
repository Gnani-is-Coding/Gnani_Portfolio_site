import { createContext, useContext, useState } from "react";

const ContextObj = createContext({})

export function ContextProvider({children}) {
    const [isDarkTheme, setDarkTheme] = useState(true)

  return(
    <ContextObj.Provider  value={{isDarkTheme, setDarkTheme }}>
        {children}
    </ContextObj.Provider>
  ) 
}

export const usePortfolio = () => {
    return useContext(ContextObj)
}