// import { useState } from 'react'
import '../../style/App.css'
import '../../style/Explainations.css'
import { BasicExplainations } from './Base'
import { PreorderExplainations } from './Preorder'
import { PostorderExplainations } from './Postorder'
import { ChallengeCard } from './Challengle'
import { useState } from 'react'
import { useEffect } from 'react'
import { GenerateRandomTree } from '../../../utils/GenerateTree'
import { type TreeNode } from '../../types/types'

interface ExplainationsGroupProps {
    explainationFor: string,
    setInputText: (value: string) => void
    setExplainationFor: (value: string) => void
}

export function Explainations({ explainationFor, setInputText, setExplainationFor}: ExplainationsGroupProps) {

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
                            
                                <p className={`relative text-black w-fit  text-center  ${explainationFor === option ? "font-bold": "font-semibold" }`}>
                                    <span className={`absolute w-full h-3 bg-[#${color}] left-0 top-3 -z-2 ${explainationFor === option ? "visible" : "invisible"}`}></span>
                                    {option}</p>
                            </div>
                        </>
                    ))}

                </div>
                {explainationFor === "Binary Tree" && (
                    <BasicExplainations  />
                )}
                {explainationFor === "Preorder" && (
                    <PreorderExplainations setInputText={setInputText}  />
                )}
                {explainationFor === "Postorder" && (
                    <PostorderExplainations setInputText={setInputText} />
                )}
                {explainationFor === "Challenge" && (
                    <ChallengeCard root={root} setRoot={setRoot} setDeepness={setDeepness} deepness={deepness}/>
                )}

            </div>
        </>
    )
}