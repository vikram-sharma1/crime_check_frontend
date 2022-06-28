

import { createContext,useState } from "react" 


export const StoreContext = createContext()



export const StoreContextporovider = ({children})=>{

    const [text,setText] = useState("")

    const handle = (value)=>{
        setText(value)
    }

    return <StoreContext.Provider value={{text,handle}}>

        {children}

    </StoreContext.Provider>
}
