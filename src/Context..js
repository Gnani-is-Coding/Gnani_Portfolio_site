import { createContext, useContext, useState } from "react";

const ContextObj = createContext({})

export function ContextProvider({children}) {
    const [isDarkTheme, setDarkTheme] = useState(false)

  const handleTheme = () => {
    setDarkTheme(true)
  }

  return(
    <ContextObj.Provider  value={{isDarkTheme,handleTheme }}>
        {children}
    </ContextObj.Provider>
  ) 
}

export const usePortfolio = () => {
    return useContext(ContextObj)
}