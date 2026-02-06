import '../../style/App.css'
import '../../style/Explanations.css'
import ArrowIcon from "../../assets/arrow.svg"
import { useState } from 'react'


interface ExplanationsGroupProps {
    setInputText: (value: string) => void
}

export function PostorderExplanations({ setInputText }: ExplanationsGroupProps)
{
    const [showSteps, setShowSteps] = useState(false)
    const [visibleArrow, setVisibleArrow] = useState(true)

    return (
        <>
            <div onScroll={() => setVisibleArrow(false)} className='relative card min-w-140 px-5 py-5
             overflow-y-auto items-start scrollbar-none max-h-[66vh] flex '
                style={{
                    scrollbarWidth: "none",   // Firefox
                    msOverflowStyle: "none"   // IE 10+
                }}>
            <div
                className={`animate-bounce absolute rotate-180 w-full flex justify-center bottom-4 -ml-5 
                    transition-opacity duration-300 ${visibleArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <img src={ArrowIcon} width={20} height={20} />
            </div>
                <div className='relative'>
                    <p className='relative text-3xl text-left text-black font-semibold mb-3 w-fit'>
                        <span className="absolute left-0 bottom-0 w-full h-4 bg-[#ffd268] -z-10 invisible sm:visible"></span>
                        What is Postorder Traversal?
                    </p>
                    <p className='explain-text'><strong>Traversal</strong> is the process of visiting all nodes in a tree in a specific order.</p>
                    <p className='explain-text'>Postorder traversal follows this rule:</p>
                    <ul className="list-decimal ml-6 ">
                        <li className='explain-text'><strong>Traverse the left subtree</strong> in postorder.</li>
                        <li className='explain-text'><strong>Traverse the right subtree</strong> in postorder.</li>
                        <li className='explain-text'><strong>Visit the root node</strong> last.</li>
                    </ul>
                    <p className='explain-text mt-3'><strong>Key idea:</strong> Children are always visited before their parent.</p>
                    <p className='text-black text-left mt-6 font-medium mb-2 '>Example:</p>
                    <div className='border-3 border-black w-70 rounded-xl flex justify-center items-center'>
                        <p className='text-black text-sm  font-semibold text-left py-5 whitespace-pre-wrap'>     1<br />  /     \<br />8        3<br />       /     \<br />     4        5</p>
                    </div>
                    <p className='text-black text-left mt-4 font-medium  text-sm'>Visit Order:</p>
                    <p className='explain-text'>Nodes are visited in this order: <code className='code'>8 → 4 → 5 → 3 → 1</code></p>
                    <button
                        onClick={() => setShowSteps(!showSteps)}
                        className='cursor-pointer  mt-4 mb-2 text-black font-medium 
                        hover:opacity-70 transition-opacity flex items-center gap-2 text-sm'>
                        <span className='text-xs'>{showSteps ? '▼' : '▶'}</span>
                        How it works (step by step)
                    </button>
                    {showSteps && (
                        <div className='ml-2'>
                            <p className='explain-text font-semibold mt-2'>Starting from root <code className='code'>1</code> (not visited yet):</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>8</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>At node <code className='code'>8</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                                <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                                <li className='explain-text'><strong>Visit <code className='code'>8</code></strong> (no children to visit)</li>
                            </ul>
                            <p className='explain-text font-semibold'>Back at <code className='code'>1</code>, go to right child → <code className='code'>3</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>4</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>At node <code className='code'>4</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                                <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                                <li className='explain-text'><strong>Visit <code className='code'>4</code></strong> (no children to visit)</li>
                            </ul>
                            <p className='explain-text font-semibold'>Back at <code className='code'>3</code>, go to right child → <code className='code'>5</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                                <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                                <li className='explain-text'><strong>Visit <code className='code'>5</code></strong> (no children to visit)</li>
                            </ul>
                            <p className='explain-text font-semibold'>Back at <code className='code'>3</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Both children <code className='code'>4</code> and <code className='code'>5</code> already visited</li>
                                <li className='explain-text'><strong>Visit <code className='code'>3</code></strong></li>
                            </ul>
                            <p className='explain-text font-semibold'>Back at root <code className='code'>1</code>:</p>
                            <ul className="list-disc ml-6">
                                <li className='explain-text'>Both children <code className='code'>8</code> and <code className='code'>3</code> already visited</li>
                                <li className='explain-text'><strong>Visit <code className='code'>1</code></strong></li>
                            </ul>
                        </div>
                    )}
                    <p className='text-black text-left text-sm mt-6 font-medium mb-2 '>Postorder output (with nulls):</p>
                    <div className="cursor-pointer hover:opacity-70" onClick={() => setInputText("null,null,8,null,null,4,null,null,5,3,1")}>
                        <p className='explain-text '><code className='code'>[null,null,8,null,null,4, null,null,5,3,1]</code></p>
                    </div>
                    <p className='text-black text-left text-base mt-6 font-medium mb-2 '>Why including <code className='code'>null</code> matters?</p>
                    <ul className="list-decimal ml-6 ">
                        <li className='explain-text'>It allows <strong>exact reconstruction of the tree</strong>.</li>
                        <li className='explain-text'>Two different trees can have the same postorder values <strong>without nulls</strong>.</li>
                        <li className='explain-text'>Common in <strong>tree serialization</strong> and interview questions.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}