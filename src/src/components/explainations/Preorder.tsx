import '../../style/App.css'
import '../../style/Explainations.css'
import ArrowIcon from "../../assets/arrow.svg"
import { useState } from 'react'

interface ExplainationsGroupProps {
    visibleArrow: Boolean,
    setInputText: (value: string) => void
}

export function PreorderExplainations({ setInputText, visibleArrow }: ExplainationsGroupProps) {
    return (
        <div className='relative'>
            <div 
                className={`animate-bounce absolute rotate-180 w-full flex justify-center top-[59vh]
                    transition-opacity duration-300 ${visibleArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <img src={ArrowIcon} width={20} height={20} />
            </div>
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
            <p className='text-black text-left mt-6 font-medium mb-2 '>Example:</p>
            <div className='border-3 border-black w-70 rounded-xl flex justify-center items-center'>
                <p className='text-black text-sm  font-semibold text-left py-5 whitespace-pre-wrap'>     1<br />  /     \<br />8        3<br />       /     \<br />     4        5</p>
            </div>
            <ul className="list-disc ml-6 ">
                <li className='explain-text'>Visit <code className='code'>1</code>.</li>
                <li className='explain-text'>Go to left child → <code className='code'>8</code>.</li>
                <li className='explain-text'>Visit <code className='code'>8</code>.</li>
                <li className='explain-text'>Go to left child → <code className='code'>null</code>.</li>
                <li className='explain-text'>Go to right child → <code className='code'>null</code>.</li>
                <li className='explain-text'>Go back to <code className='code'>1</code>.</li>
                <li className='explain-text'>Go to right child → <code className='code'>3</code>.</li>
                <li className='explain-text'>Visit <code className='code'>3</code>.</li>
                <li className='explain-text'>Go to left child → <code className='code'>4</code>.</li>
                <li className='explain-text'>Visit <code className='code'>4</code>.</li>
                <li className='explain-text'>Go to left child → <code className='code'>null</code>.</li>
                <li className='explain-text'>Go to right child → <code className='code'>null</code>.</li>
                <li className='explain-text'>Go back to <code className='code'>3</code>.</li>
                <li className='explain-text'>Go to right child → <code className='code'>5</code>.</li>
                <li className='explain-text'>Visit <code className='code'>5</code>.</li>
                <li className='explain-text'>Go to left child → <code className='code'>null</code>.</li>
                <li className='explain-text'>Go to right child →  <code className='code'>null</code>.</li>
            </ul>
            <p className='text-black text-left mt-6 font-medium mb-2 '>Preorder Output</p>
            <div className="cursor-copy hover:opacity-70" onClick={() => setInputText("1,8,null,null,3,4,null,null,5,null,null")}>
                <p className='explain-text '><code className='code'>1,8,null,null,3,4,null,null,5,null,null</code></p>
            </div>
            <p className='text-black text-left mt-6 font-medium mb-2 '>Why Including <code className='code'>null</code> Matters?</p>
            <ul className="list-decimal ml-6 ">
                <li className='explain-text'>It allows<strong> exact reconstruction of the tree</strong>.</li>
                <li className='explain-text'>Two different trees can have the same preorder values <strong>without nulls</strong>.</li>
                <li className='explain-text'>Common in <strong>tree serialization</strong> and interview questions.</li>
            </ul>

        </div>
    )
}