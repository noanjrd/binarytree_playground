import '../../styles/App.css'
import '../../styles/Explanations.css'
import { BasicExplanations } from './Base' 
import { BSTExplanations } from './BST'
import { ChallengeCard } from './Challenge'
import { useEffect, useState } from 'react'
import { GenerateRandomTree } from '../../utils/generateTree'
import { type TreeNode } from '../../types/types'
import { GetPostorderList } from '../../utils/postorderTree'
import { GetPreorderList } from '../../utils/preorderTree'
import { Traversals } from './traversals/traversals'
import { useTreeContext } from '../../contexts/TreeContext'


interface ExplainationsGroupProps {
    tabOption: string,
    setTabOption: (value: string) => void
}

const options: Record<string, string> = {
    "Binary Tree" : "cdff58",
    "Traversal" : "b9adff",
    "BST" : "ffaaf8",
    "Challenge" : "ff9494"
}

export function Explanations({ tabOption, setTabOption}: ExplainationsGroupProps)
{
    const {traversalType} = useTreeContext()
    const [deepness, setDeepness] = useState<number>(2)
    const [root, setRoot] = useState<TreeNode>(GenerateRandomTree(deepness))
    const [answer, setAnswer] = useState(GetPostorderList(root))

    useEffect(() => {
        if (traversalType === "Postorder")
        {
            setAnswer(GetPostorderList(root))
        }
        if (traversalType === "Preorder")
        {
            setAnswer(GetPreorderList(root))
        }
    }, [traversalType])

    const ChangeTree = () => {

        const newRoot = GenerateRandomTree(deepness)
        setRoot(newRoot)
        if (traversalType === "Postorder")
        {
            setAnswer(GetPostorderList(newRoot))
        }
        if (traversalType === "Preorder")
        {
            setAnswer(GetPreorderList(newRoot))
        }   
    }

    return (
        <>
            <div>
                <div className='tab-bar flex flex-row border items-center rounded-full '>
                    {Object.entries(options).map(([option, color], index) => (
                            <div key={index} className={`    flex items-center    w-fit  ${tabOption === option ? " tab-option-selected" : "tab-option"}`}
                            onClick={() => setTabOption(option)}>
                            
                                <p className={`relative text-black w-fit  text-center font-semibold `}>
                                    <span className={`absolute w-full h-3 bg-[#${color}] left-0 top-3 -z-2 ${tabOption === option ? "visible" : "invisible"}`}></span>
                                    {option}</p>
                            </div>
                    ))}
                </div>
                {tabOption === "Binary Tree" && (
                    <BasicExplanations setTabOption={setTabOption}  />
                )}
                {tabOption === "BST" && (
                    <BSTExplanations  />
                )}
                {(tabOption === "Traversal" || tabOption==="Postorder" 
                || tabOption==="Preorder" || tabOption === "Inorder") && (
                    <Traversals setTabOption={setTabOption} tabOption={tabOption} />
                )}
                {tabOption === "Challenge" && (
                    <ChallengeCard root={root} 
                    setDeepness={setDeepness} deepness={deepness} 
                    answer={answer} ChangeTree={ChangeTree} />
                )}
            </div>
        </>
    )
}