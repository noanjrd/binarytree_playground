import { useState } from 'react'
import '../../styles/App.css'
import '../../styles/Explanations.css'
import ArrowIcon from "../../assets/arrow.svg"

export function BSTExplanations() {
    const [visibleArrow, setVisibleArrow] = useState(true)
    return (
        <div onScroll={() => setVisibleArrow(false)} className='card relative px-5 py-5  overflow-y-auto 
        scrollbar-none items-start max-h-[66vh] flex  min-w-140'
            style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none" // IE 10+
            }}>
            <div
                className={`animate-bounce absolute rotate-180 w-full flex justify-center bottom-4 -ml-5 
                    transition-opacity duration-300 ${visibleArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <img src={ArrowIcon} width={20} height={20} />
            </div>
            <div className=''>
                <p className='relative text-3xl text-left text-black font-semibold mb-3 w-fit'>
                    <span className="absolute left-0 bottom-0 w-full h-4 bg-[#ffaaf8] -z-10 invisible sm:visible"></span>
                    What is a Binary Search Tree?
                </p>

                <p className='explain-text max-w-110'>A <strong>Binary Search Tree (BST)</strong> is a special type of binary tree with a strict ordering rule:</p>
                <ul className="list-disc ml-6 mt-1 mb-4">
                    <li className='explain-text max-w-110'>For each node, all values in the <strong>left subtree</strong> are <strong>smaller</strong> than the node's value.</li>
                    <li className='explain-text max-w-110'>All values in the <strong>right subtree</strong> are <strong>greater</strong> than the node's value.</li>
                    <li className='explain-text max-w-110'>This property must be true for <strong>every node</strong> in the tree.</li>
                </ul>

                <div className='mb-6'>
                    <p className='text-black text-left font-medium mb-2'>Example of a valid BST:</p>
                    <div className='border-3 border-black w-70 rounded-xl flex justify-center mb-2'>
                        <p className='text-black text-sm font-semibold text-left py-5 whitespace-pre-wrap'>     5<br />  /     \<br />3        8<br />        /   \<br />      7      9</p>
                    </div>
                    <ul className="list-disc ml-6">
                        <li className='explain-text'>At node <code className='code'>5</code>: left (3) {'<'} 5 {'<'} right (8,7,9)</li>
                        <li className='explain-text'>At node <code className='code'>8</code>: left (7) {'<'} 8 {'<'} right (9)</li>
                    </ul>
                </div>

                <div className='mb-6'>
                    <p className='text-black text-left font-medium mb-2'>Example of an invalid BST:</p>
                    <div className='border-3 border-black w-70 rounded-xl flex justify-center mb-2'>
                        <p className='text-black text-sm font-semibold text-left py-5 whitespace-pre-wrap'>     5<br />  /     \<br />3        8<br />       /     \ <br />     1        6</p>
                    </div>
                    <p className='explain-text'><strong>Problem:</strong> Node <code className='code'>1</code> is in the right subtree of <code className='code'>5</code>, but 1 {'<'} 5. This violates the BST property.</p>
                </div>

                <div className='mb-6'>
                    <p className='text-black text-left font-medium mb-2 text-xl'>🔍 Why use a BST?</p>
                    <p className='explain-text mb-3'>BSTs make searching incredibly fast. Real-world example:</p>
                    
                    <p className='text-black text-left font-medium mb-1'>Autocomplete (like Google search)</p>
                    <p className='explain-text mb-1'>When you type "cat":</p>
                    <ul className="list-disc ml-6 mb-2">
                        <li className='explain-text'>The BST quickly finds all words starting with "ca"</li>
                        <li className='explain-text'>Then narrows to "cat", "catch", "category"</li>
                        <li className='explain-text'>Shows suggestions instantly</li>
                    </ul>
                           <p className='explain-text mt-2'>BSTs power critical infrastructure. Databases, operating systems, networks, and compilers all rely on tree structures for performance.</p>
                
                </div>

                <div className=''>
                    <p className='text-black text-left font-medium mb-3 text-xl'>⏱️ Time Complexity</p>
                    <div className='mb-4'>
                        <p className='explain-text font-semibold mb-1'>Balanced tree / evenly distributed tree (best case):</p>
                        <ul className="list-disc ml-6">
                            <li className='explain-text'>Search, Insert, Delete: <code className='code'>O(log n)</code></li>
                            <li className='explain-text'>Fast and eliminates half the data at each step</li>
                        </ul>
                    </div>

                    <div className='mb-4'>
                        <p className='explain-text font-semibold mb-1'>Unbalanced tree (worst case):</p>
                        <ul className="list-disc ml-6 mb-2">
                            <li className='explain-text'>All operations: <code className='code'>O(n)</code>. We must check every node</li>
                        </ul>
                        
                        <div className='ml-6'>
                            <p className='explain-text mb-2'>Inserting <code className='code'>1, 2, 3, 4, 5</code> in order creates a chain:</p>
                            <div className='border-3 border-black rounded-lg p-2 w-70'>
                                <p className='text-sm text-black font-semibold whitespace-pre-wrap'>1<br /> \<br />  2<br />   \<br />    3<br />     \<br />      4<br />       \<br />        5</p>
                            </div>
                        </div>
                    </div>

                    <p className='explain-text'>
                        <a
                            href="https://en.wikipedia.org/wiki/Big_O_notation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-black hover:opacity-70 underline font-medium'
                        >
                            Learn more about Big O complexity
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}