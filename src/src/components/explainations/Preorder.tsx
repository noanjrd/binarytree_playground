import '../../style/App.css'
import '../../style/Explainations.css'
import ArrowIcon from "../../assets/arrow.svg"
import { useState } from 'react'

interface ExplainationsGroupProps {
    setInputText: (value: string) => void
}

export function PreorderExplainations({ setInputText }: ExplainationsGroupProps) {
    const [showSteps, setShowSteps] = useState(false)
    const [visibleArrow, setVisibleArrow] = useState(true)
    return (
        <div onScroll={() => setVisibleArrow(false)} className='card relative px-5 py-5  overflow-y-auto 
        scrollbar-none max-h-[66vh] flex justify-center'
            style={{
                scrollbarWidth: "none",   // Firefox
                msOverflowStyle: "none"   // IE 10+
            }}>
                <div
                    className={`animate-bounce absolute rotate-180 w-full flex justify-center bottom-4
                    transition-opacity duration-300 ${visibleArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <img src={ArrowIcon} width={20} height={20} />
                </div>
            <div className='relative'>
                <p className='relative text-3xl text-left text-black font-semibold mb-3 w-fit'>
                    <span className="absolute left-0 bottom-0 w-full h-4 bg-[#b9adff] -z-10 invisible sm:visible"></span>
                    What is Preorder Traversal?
                </p>
                <p className='explain-text'><strong>Traversal</strong> is the process of visiting all nodes in a tree in a specific order.</p>
                <p className='explain-text'>Preorder traversal follows this rule:</p>
                <ul className="list-decimal ml-6 ">
                    <li className='explain-text'><strong>Visit the root node</strong> first.</li>
                    <li className='explain-text'><strong>Traverse the left subtree</strong> in preorder.</li>
                    <li className='explain-text'><strong>Traverse the right subtree</strong> in preorder.</li>
                </ul>
                <p className='explain-text mt-3'><strong>Key idea:</strong> Visit each node <strong>before</strong> visiting its children.</p>
                <p className='text-black text-left mt-5 font-medium mb-2 '>Example:</p>
                <div className='border-3 border-black w-70 rounded-xl flex justify-center items-center'>
                    <p className='text-black text-sm  font-semibold text-left py-5 whitespace-pre-wrap'>     1<br />  /     \<br />8        3<br />       /     \<br />     4        5</p>
                </div>
                <p className='text-black text-left mt-4 font-medium mb-2 text-sm '>Visit Order:</p>
                <p className='explain-text'>Nodes are visited in this order: <code className='code'>1 → 8 → 3 → 4 → 5</code></p>

                <button
                    onClick={() => setShowSteps(!showSteps)}
                    className='cursor-pointer mt-4 mb-2 text-black font-medium hover:opacity-70 transition-opacity flex items-center gap-2'
                >
                    <span className='text-lg'>{showSteps ? '▼' : '▶'}</span>
                    How it works (step by step)
                </button>
                {showSteps && (
                    <div className='ml-2'>
                        <p className='explain-text font-semibold mt-2'>At root <code className='code'>1</code>:</p>
                        <ul className="list-disc ml-6 mb-3">
                            <li className='explain-text'><strong>Visit <code className='code'>1</code></strong> (root first!)</li>
                            <li className='explain-text'>Go to left child → <code className='code'>8</code></li>
                        </ul>

                        <p className='explain-text font-semibold'>At node <code className='code'>8</code>:</p>
                        <ul className="list-disc ml-6 mb-3">
                            <li className='explain-text'><strong>Visit <code className='code'>8</code></strong></li>
                            <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                            <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                            <li className='explain-text'>Done with <code className='code'>8</code>, go back to <code className='code'>1</code></li>
                        </ul>

                        <p className='explain-text font-semibold'>Back at <code className='code'>1</code>, go to right child → <code className='code'>3</code>:</p>
                        <ul className="list-disc ml-6 mb-3">
                            <li className='explain-text'><strong>Visit <code className='code'>3</code></strong></li>
                            <li className='explain-text'>Go to left child → <code className='code'>4</code></li>
                        </ul>

                        <p className='explain-text font-semibold'>At node <code className='code'>4</code>:</p>
                        <ul className="list-disc ml-6 mb-3">
                            <li className='explain-text'><strong>Visit <code className='code'>4</code></strong></li>
                            <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                            <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                            <li className='explain-text'>Done with <code className='code'>4</code>, go back to <code className='code'>3</code></li>
                        </ul>

                        <p className='explain-text font-semibold'>Back at <code className='code'>3</code>, go to right child → <code className='code'>5</code>:</p>
                        <ul className="list-disc ml-6 mb-3">
                            <li className='explain-text'><strong>Visit <code className='code'>5</code></strong></li>
                            <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                            <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                            <li className='explain-text'>Done! Traversal complete</li>
                        </ul>
                    </div>
                )}

                <p className='text-black text-left mt-6 font-medium mb-2 '>Preorder output (with nulls)</p>
                <div className="cursor-pointer hover:opacity-70" onClick={() => setInputText("1,8,null,null,3,4,null,null,5,null,null")}>
                    <p className='explain-text '><code className='code'>[1,8,null,null,3,4,null,null,5,null,null]</code></p>
                </div>

                <p className='text-black text-left mt-6 font-medium mb-2 '>Why including <code className='code'>null</code> matters?</p>
                <ul className="list-decimal ml-6 ">
                    <li className='explain-text'>It allows <strong>exact reconstruction of the tree</strong>.</li>
                    <li className='explain-text'>Two different trees can have the same preorder values <strong>without nulls</strong>.</li>
                    <li className='explain-text'>Common in <strong>tree serialization</strong> and interview questions.</li>
                </ul>

            </div>
        </div>
    )
}