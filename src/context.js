import { createContext, useState } from "react"

export const MyContext = createContext()

export const MyProvider = ({children}) => {
    const [value, setValue] = useState(['bg-light', 'text-dark']);

  return (
    
    <MyContext.Provider value={{ value, setValue }}>
        {children}
    </MyContext.Provider>

  )

}