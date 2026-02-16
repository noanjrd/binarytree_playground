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


interface ExplainationsGroupProps {
    explanationFor: string,
    setInputText: (value: string) => void
    setExplanationFor: (value: string) => void
    setOrderType: (val:string) => void
    OrderType: string
}

const options: Record<string, string> = {
    "Binary Tree" : "cdff58",
    "Traversal" : "b9adff",
    "BST" : "ffaaf8",
    "Challenge" : "ff9494"
}

export function Explanations({ explanationFor, setInputText, setExplanationFor, OrderType, setOrderType}: ExplainationsGroupProps)
{
    const [deepness, setDeepness] = useState<number>(2)
    const [root, setRoot] = useState<TreeNode>(GenerateRandomTree(deepness))
    const [answer, setAnswer] = useState(GetPostorderList(root))

    useEffect(() => {
        if (OrderType === "Postorder")
        {
            setAnswer(GetPostorderList(root))
        }
        if (OrderType === "Preorder")
        {
            setAnswer(GetPreorderList(root))
        }
    }, [OrderType])

    const ChangeTree = () => {

        const newRoot = GenerateRandomTree(deepness)
        setRoot(newRoot)
        if (OrderType === "Postorder")
        {
            setAnswer(GetPostorderList(newRoot))
        }
        if (OrderType === "Preorder")
        {
            setAnswer(GetPreorderList(newRoot))
        }   
    }

    return (
        <>
            <div>
                <div className='tab-bar flex flex-row border items-center rounded-full '>
                    {Object.entries(options).map(([option, color], index) => (
                            <div key={index} className={`    flex items-center    w-fit  ${explanationFor === option ? " tab-option-selected" : "tab-option"}`}
                            onClick={() => setExplanationFor(option)}>
                            
                                <p className={`relative text-black w-fit  text-center font-semibold `}>
                                    <span className={`absolute w-full h-3 bg-[#${color}] left-0 top-3 -z-2 ${explanationFor === option ? "visible" : "invisible"}`}></span>
                                    {option}</p>
                            </div>
                    ))}
                </div>
                {explanationFor === "Binary Tree" && (
                    <BasicExplanations setOrderType={setOrderType} setExplanationFor={setExplanationFor}  />
                )}
                {explanationFor === "BST" && (
                    <BSTExplanations  />
                )}
                {(explanationFor === "Traversal" || explanationFor==="Postorder" 
                || explanationFor==="Preorder" || explanationFor === "Inorder") && (
                    <Traversals setInputText={setInputText} setOrderType={setOrderType} 
                    setExplanationFor={setExplanationFor} explanationFor={explanationFor} />
                )}
                {explanationFor === "Challenge" && (
                    <ChallengeCard root={root} setInputText={setInputText}
                    setDeepness={setDeepness} deepness={deepness} 
                    answer={answer} ChangeTree={ChangeTree} OrderType={OrderType}/>
                )}
            </div>
        </>
    )
}