import '../../../styles/App.css'
import '../../../styles/Explanations.css'
import { useState } from 'react'

export function InorderExplanations() {
    const [showSteps, setShowSteps] = useState(false)

    return (
        <div className='relative w-full'>
            <div className='relative'>
                    <p className='relative text-3xl text-left text-black font-semibold mb-3 w-fit'>
                        <span className="absolute left-0 bottom-0 w-full h-4 bg-[#7dd3fc] -z-10 invisible sm:visible"></span>
                        What is Inorder Traversal?
                    </p>
                    <p className='explain-text'><strong>Traversal</strong> is the process of visiting all nodes in a tree in a specific order.</p>
                    <p className='explain-text'>Inorder traversal follows this rule:</p>
                    <ul className="list-decimal ml-6 ">
                        <li className='explain-text'><strong>Traverse the left subtree</strong> in inorder.</li>
                        <li className='explain-text'><strong>Visit the root node</strong>.</li>
                        <li className='explain-text'><strong>Traverse the right subtree</strong> in inorder.</li>
                    </ul>
                    <p className='explain-text mt-3'><strong>Key idea:</strong> Visit the left child, then the parent, then the right child.</p>
                    <p className='text-black text-left mt-6 font-semibold mb-2 '>Example:</p>
                    <div className='border-3 border-black w-70 rounded-xl flex justify-center items-center'>
                        <p className='text-black text-sm  font-semibold text-left py-5 whitespace-pre-wrap'>     5<br />  /     \<br />3        8<br />       /     \<br />     7        9</p>
                    </div>
                    <p className='text-black text-left mt-4 font-semibold  text-sm'>Visit Order:</p>
                    <p className='explain-text'>Nodes are visited in this order: <code className='code'>3 → 5 → 7 → 8 → 9</code></p>
                    <button
                        onClick={() => setShowSteps(!showSteps)}
                        className='cursor-pointer  mt-4 mb-2 text-black font-semibold 
                        hover:opacity-70 transition-opacity flex items-center gap-2 text-sm'>
                        <span className='text-xs'>{showSteps ? '▼' : '▶'}</span>
                        How it works (step by step)
                    </button>
                    {showSteps && (
                        <div className='ml-2'>
                            <p className='explain-text font-semibold mt-2'>Starting from root <code className='code'>5</code> (not visited yet):</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>3</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>At node <code className='code'>3</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                                <li className='explain-text'><strong>Visit <code className='code'>3</code></strong> (left is null, so visit now)</li>
                                <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>Back at <code className='code'>5</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Left subtree done</li>
                                <li className='explain-text'><strong>Visit <code className='code'>5</code></strong></li>
                                <li className='explain-text'>Go to right child → <code className='code'>8</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>At node <code className='code'>8</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>7</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>At node <code className='code'>7</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                                <li className='explain-text'><strong>Visit <code className='code'>7</code></strong></li>
                                <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>Back at <code className='code'>8</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Left subtree done</li>
                                <li className='explain-text'><strong>Visit <code className='code'>8</code></strong></li>
                                <li className='explain-text'>Go to right child → <code className='code'>9</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>At node <code className='code'>9</code>:</p>
                            <ul className="list-disc ml-6 mb-3">
                                <li className='explain-text'>Go to left child → <code className='code'>null</code></li>
                                <li className='explain-text'><strong>Visit <code className='code'>9</code></strong></li>
                                <li className='explain-text'>Go to right child → <code className='code'>null</code></li>
                            </ul>
                            <p className='explain-text font-semibold'>Done! Final order: <code className='code'>3 → 5 → 7 → 8 → 9</code></p>
                        </div>
                    )}
                    <p className='text-black text-left text-sm mt-4 font-semibold mb-2 '>Inorder output (with nulls):</p>
                    <div className="" >
                        <p className='explain-text '><code className='code'>[null,3,null,5,null,7,null,8,null,9,null]</code></p>
                    </div>
                    <p className='text-black text-left text-xl mt-6 font-semibold mb-2 '>🌟 Why Inorder is special?</p>
                    <p className='explain-text mb-2'>Inorder traversal has unique properties that make it extremely useful:</p>

                    <ul className="list-disc ml-6">
                        <li className='explain-text mt-2'><strong>Sorted order for BSTs:</strong> For Binary Search Trees, inorder gives you nodes in ascending order. Example: The tree above outputs <code className='code'>3 → 5 → 7 → 8 → 9</code> (sorted!)</li>
                        <li className='explain-text mt-2'><strong>Validate a BST:</strong> Do an inorder traversal. If the output is sorted, it's a valid BST. If not, it's invalid.</li>
                        <li className='explain-text mt-2'><strong>Convert BST to sorted array:</strong> Need a sorted list? Just do inorder traversal on your BST and collect the values.</li>
                    </ul>
                </div>
            </div>
    )
}