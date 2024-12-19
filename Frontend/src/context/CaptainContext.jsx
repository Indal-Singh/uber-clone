import { useState } from "react";
import { createContext } from "react"

export const CapatinDataContext = createContext(null);
const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState(null);
    return (
      <CapatinDataContext.Provider value={{ captain, setCaptain }}>
        {children}
      </CapatinDataContext.Provider>
    )
  }

export default CaptainContext