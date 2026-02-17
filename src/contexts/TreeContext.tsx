import { createContext, useContext, useState, type ReactNode } from "react";

interface TreeContextType {
    traversalType : string
    setTraversalType : (val : string) => void
    inputText:string
    setInputText : (val:string) => void
}

const TreeContext = createContext<TreeContextType | undefined>(undefined)

export function TreeProvider({ children }: {children:ReactNode})
{
    const [inputText, setInputText] = useState("")
    const [traversalType, setTraversalType] = useState("Preorder")
    return (
        <TreeContext.Provider value={{
            inputText,
            traversalType,
            setInputText,
            setTraversalType,
        }}>
            {children}
        </TreeContext.Provider>
    )
}

export function useTreeContext()
{
    const context = useContext(TreeContext)
    if (!context)
    {
        throw new Error("NO context")
    }
    return context
}