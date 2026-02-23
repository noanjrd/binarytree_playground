import '../../styles/App.css'
import '../../styles/Explanations.css'
import DisplayBinaryTree from '../DisplayBinaryTree'
import { getTreeDeepness } from "../../utils/binaryTree"
import { useEffect, useState } from 'react'
import { useTreeContext } from '../../contexts/TreeContext'
import { GenerateRandomTree } from '../../utils/generateTree'
import { GetPostorderList } from '../../utils/postorderTree'
import { GetPreorderList } from '../../utils/preorderTree'


export function ChallengeCard() {
    const [showAnswer, setShowAnswer] = useState(false)
    const {setInputText, traversalType, depthChallengeTree, setDepthChallengeTree, rootChallengeTree, setRootChallengeTree} =useTreeContext()
    const [answer, setAnswer] = useState<string>("")

    useEffect(() => {
        if (traversalType === "Postorder")
        {
            setAnswer(GetPostorderList(rootChallengeTree))
        }
        if (traversalType === "Preorder")
        {
            setAnswer(GetPreorderList(rootChallengeTree))
        }
    }, [traversalType])

    useEffect(() => {
        setShowAnswer(false)
    }, [traversalType])

    const ChangeTree = () => {

        const newRoot = GenerateRandomTree(depthChallengeTree)
        setRootChallengeTree(newRoot)
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
        <div className='card min-w-140 relative px-5 py-5  overflow-y-auto 
         items-start scrollbar-none max-h-[66vh] flex '
            style={{
                scrollbarWidth: "none",   // Firefox
                msOverflowStyle: "none"   // IE 10+
            }}>
            <div className='flex flex-col w-full '>
                <p className='relative text-3xl text-left text-black font-semibold mb-2 w-fit'>
                    <span className="absolute left-0 bottom-0 w-full h-4 bg-[#ff9494] -z-10 invisible sm:visible"></span>
                    Binary Tree Challenge
                </p>
                <p className=' text-left text-black  w-fit'>
                    Try to recreate this binary trees using the visualizer to the right.
                </p>
                <div className='flex justify-center items-center mt-5  '>
                    <DisplayBinaryTree root={rootChallengeTree} deepness={getTreeDeepness(rootChallengeTree)} />
                </div>
                <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className='cursor-pointer  mt-4  text-black font-medium hover:opacity-70 transition-opacity flex items-center gap-2'
                >
                    <span className='text-base'>{showAnswer ? '▼' : '▶'}</span>
                    The answer
                </button>
                {showAnswer && (
                    <div className='cursor-pointer hover:opacity-70 ' onClick={() => setInputText(answer)}>
                        <p className='explain-text ml-4 max-w-100 break-all text-ellipsis'><code className='code'>[{answer}]</code></p>
                    </div>
                )}
                <div className='flex gap-1 flex-row justify-center items-center mt-5'>
                    <select
                        className='text-black rounded-full font-semibold border-2 border-black  px-4 py-2 
                        shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          transition-all cursor-pointer focus:outline-none'
                        value={depthChallengeTree}
                        onChange={(e) => setDepthChallengeTree(Number(e.target.value))}
                    >
                        <option value="1">Depth: 1</option>
                        <option value="2">Depth: 2</option>
                        <option value="3">Depth: 3</option>
                        <option value="4">Depth: 4</option>
                        <option value="5">Depth: 5</option>
                    </select>
                    <button className=' button-home-black ' onClick={() => { ChangeTree(); setShowAnswer(false) }}
                    >Regenerate
                    </button>
                </div>
            </div>
        </div>
    )
}