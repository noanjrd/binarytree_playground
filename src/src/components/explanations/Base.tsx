import '../../style/App.css'
import '../../style/Explanations.css'
import { useState } from 'react'
import ArrowIcon from "../../assets/arrow.svg"


interface GroupProps {
    setExplanationFor: (value: string) => void
    setOrderType: (val:string) => void
}

export function BasicExplanations({setOrderType, setExplanationFor} : GroupProps)
{
    const [visibleArrow, setVisibleArrow] = useState(true)

    return (
        <div onScroll={() => setVisibleArrow(false)}   className='card relative px-5 py-5 overflow-y-auto 
        scrollbar-none items-start  max-h-[66vh] flex  min-w-140'
            style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none" // IE 10+
            }}>
            <div
                className={`animate-bounce absolute rotate-180 w-full  -ml-5 flex justify-center bottom-4
                    transition-opacity duration-300 ${visibleArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <img src={ArrowIcon} width={20} height={20} />
            </div>
            <div className=''>
                <p className='relative text-3xl text-left text-black font-semibold mb-3 w-fit'>
                    <span className="absolute left-0 bottom-0 w-full h-4 bg-[#cdff58] -z-10 invisible sm:visible"></span>
                    What is a Binary Tree?
                </p>
                <p className='explain-text'>A <strong>binary tree</strong> is a data structure where:</p>
                <ul className="list-disc ml-6 mt-1">
                    <li className='explain-text'>Each node has <strong>at most two children</strong>: a left child and a right child.</li>
                    <li className='explain-text'>The top node is called the <strong>root</strong>.</li>
                    <li className='explain-text'>Nodes with no children are called <strong>leaves</strong>.</li>
                </ul>
                <p className='text-black text-left mt-6 font-medium mb-2 '>Example:</p>
                <div className='border-3 border-black w-70 rounded-xl flex justify-center items-center'>
                    <p className='text-black text-sm  font-semibold text-left py-5 whitespace-pre-wrap'>     1<br />  /     \<br />8        3<br />       /     \<br />     4        5</p>
                </div>
                <ul className="list-disc ml-6 ">
                    <li className='explain-text'><code className='code'>1</code> is the root.</li>
                    <li className='explain-text'><code className='code'>8</code> and <code className='code'>3</code> are children of <code className='code'>1</code>.</li>
                    <li className='explain-text'><code className='code'>4</code> and <code className='code'>5</code> are children of <code className='code'>3</code>.</li>
                    <li className='explain-text'><code className='code'>8</code>, <code className='code'>3</code>, <code className='code'>4</code>, and <code className='code'>5</code> are leaves.</li>
                </ul>
                <p className='text-black text-left mt-6 font-medium mb-2 text-xl '>Tree Traversal</p>
                <p className='explain-text'>There are three main ways to traverse (visit all nodes in) a binary tree:</p>
                <ul className="list-disc ml-6 mt-1">
                    <li onClick={() => {setExplanationFor("Preorder"); setOrderType("Preorder")}} className='explain-text hover:opacity-70 cursor-pointer'><strong>Preorder:</strong> Visit <code className='code'>root → left → right</code></li>
                    <li className='explain-text'><strong>Inorder:</strong> Visit <code className='code'>left → root → right</code></li>
                    <li onClick={() => {setExplanationFor("Postorder"); setOrderType("Postorder")}} className='explain-text cursor-pointer hover:opacity-70'><strong>Postorder:</strong> Visit <code className='code'>left → right → root</code></li>
                </ul>
                <p className='explain-text mt-2 max-w-120'>Each method produces a different order of nodes and is useful for different purposes.</p>
            </div>
        </div>
    )
}