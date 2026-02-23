import { createContext, useContext, useState, type ReactNode } from "react";
import type { TreeNode } from "../types/types";
import { GenerateRandomTree } from "../utils/generateTree";

interface TreeContextType {
    traversalType : string
    setTraversalType : (val : string) => void
    inputText:string
    setInputText : (val:string) => void
    depthChallengeTree : number
    setDepthChallengeTree : (val : number) => void
    rootChallengeTree : TreeNode
    setRootChallengeTree : (val: TreeNode) => void
}

const TreeContext = createContext<TreeContextType | undefined>(undefined)

export function TreeProvider({ children }: {children:ReactNode})
{
    const [inputText, setInputText] = useState("")
    const [traversalType, setTraversalType] = useState("Preorder")
    const [depthChallengeTree, setDepthChallengeTree] = useState(2)
    const [rootChallengeTree, setRootChallengeTree] = useState(GenerateRandomTree(depthChallengeTree))
    return (
        <TreeContext.Provider value={{
            inputText,
            traversalType,
            depthChallengeTree,
            rootChallengeTree,
            setRootChallengeTree,
            setInputText,
            setTraversalType,
            setDepthChallengeTree
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