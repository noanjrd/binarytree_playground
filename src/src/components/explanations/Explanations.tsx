// import { useState } from 'react'
import '../../style/App.css'
import '../../style/Explanations.css'
import { BasicExplanations } from './Base'
import { PreorderExplanations } from './Preorder'
import { PostorderExplanations } from './Postorder'
import { ChallengeCard } from './Challenge'
import { useState } from 'react'
import { useEffect } from 'react'
import { GenerateRandomTree } from '../../../utils/GenerateTree'
import { type TreeNode } from '../../types/types'

interface ExplainationsGroupProps {
    explainationFor: string,
    setInputText: (value: string) => void
    setExplainationFor: (value: string) => void
}

export function Explanations({ explainationFor, setInputText, setExplainationFor}: ExplainationsGroupProps) {

    const options: Record<string, string> = {
        "Binary Tree" : "cdff58",
        "Preorder" : "b9adff",
        "Postorder" : "ffd268",
        "Challenge" : "ff9494"
    }

    const [root, setRoot] = useState<TreeNode | null>(null)
    const [deepness, setDeepness] = useState<number>(2)
    useEffect(() => {
        setRoot(GenerateRandomTree(deepness))
    }, [])
    return (
        <>
            <div>
                <div className='tab-bar flex flex-row border items-center rounded-full '>
                    {Object.entries(options).map(([option, color]) => (
                        <>
                            <div className={`    flex items-center    w-fit  ${explainationFor === option ? " tab-option-selected" : "tab-option"}`}
                            onClick={() => setExplainationFor(option)}>
                            
                                <p className={`relative text-black w-fit  text-center font-semibold `}>
                                    <span className={`absolute w-full h-3 bg-[#${color}] left-0 top-3 -z-2 ${explainationFor === option ? "visible" : "invisible"}`}></span>
                                    {option}</p>
                            </div>
                        </>
                    ))}

                </div>
                {explainationFor === "Binary Tree" && (
                    <BasicExplanations  />
                )}
                {explainationFor === "Preorder" && (
                    <PreorderExplanations setInputText={setInputText}  />
                )}
                {explainationFor === "Postorder" && (
                    <PostorderExplanations setInputText={setInputText} />
                )}
                {explainationFor === "Challenge" && (
                    <ChallengeCard root={root} setRoot={setRoot} setDeepness={setDeepness} deepness={deepness}/>
                )}

            </div>
        </>
    )
}