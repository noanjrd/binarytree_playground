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
        "Binary Tree" : "#",
        "Preorder" : "",
        "Postorder" : "",
        "Challenge" : ""
    }

    const [root, setRoot] = useState<TreeNode | null>(null)
    useEffect(() => {
        setRoot(GenerateRandomTree(3))
    }, [])
    return (
        <>
            <div>
                <div className='tab-bar flex flex-row border items-center rounded-full '>
                    {options.map((option:any, index:number) => (
                        <>
                            <div key={index} className={`    flex items-center    w-fit  ${explainationFor === option ? " tab-option-selected" : "tab-option"}`}
                            onClick={() => setExplainationFor(option)}>
                            
                                <p className={`relative text-black w-fit  text-center  ${explainationFor === option ? "font-bold": "font-semibold" }`}>
                                    <span className={`absolute w-full h-4.5 border bg-red-600 left-0 top-2.5 -z-2`}></span>
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
                    <ChallengeCard root={root} setRoot={setRoot}/>
                )}

            </div>
        </>
    )
}