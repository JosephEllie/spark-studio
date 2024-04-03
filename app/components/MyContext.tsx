"use client"
import {createContext, useState, ReactNode, useContext} from 'react'
import { MyContextType } from './MyContextType'

  
const initialData = new Blob();
const FileContext = createContext<MyContextType>({
    files: initialData,
    setFiles: ()=> {

    }
})

export const MyProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [files, setFiles] = useState<Blob>(initialData)

    return ( 
        <FileContext.Provider value={{files, setFiles}}>
         {children}
        </FileContext.Provider>
     );
}
export const useFileContext = () => useContext(FileContext);
 