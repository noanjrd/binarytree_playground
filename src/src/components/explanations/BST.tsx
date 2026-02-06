import '../../style/App.css'
import '../../style/Explanations.css'


export function BSTExplanations() {

    return (
        <div className='card relative px-5 py-5  overflow-y-auto 
        scrollbar-none items-start max-h-[66vh] flex  min-w-140'
            style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none" // IE 10+
            }}>
<div className=''>
    <p className='relative text-3xl text-left text-black font-semibold mb-3 w-fit'>
        <span className="absolute left-0 bottom-0 w-full h-4 bg-[#ffaaf8] -z-10 invisible sm:visible"></span>
        What is a Binary Search Tree?
    </p>

    <p className='explain-text'>A <strong>Binary Search Tree (BST)</strong> is a special type of binary tree with a strict ordering rule:</p>
    <ul className="list-disc ml-6 mt-1">
        <li className='explain-text'>For each node, all values in the <strong>left subtree</strong> are <strong>smaller</strong> than the node's value.</li>
        <li className='explain-text'>All values in the <strong>right subtree</strong> are <strong>greater</strong> than the node's value.</li>
        <li className='explain-text'>This property must be true for <strong>every node</strong> in the tree.</li>
    </ul>
    
    <p className='text-black text-left mt-6 font-medium mb-2 '>Example of a valid BST:</p>
    <div className='border-3 border-black w-70 rounded-xl flex justify-center '>
        <p className='text-black text-sm  font-semibold text-left py-5 whitespace-pre-wrap'>     5<br />  /     \<br />3        8<br />        /   \<br />      7      9</p>
    </div>
    <ul className="list-disc ml-6 mt-2">
        <li className='explain-text'>At node <code className='code'>5</code>: left subtree (3) {'<'} 5 {'<'} right subtree (8,7,9)</li>
        <li className='explain-text'>At node <code className='code'>8</code>: left (7) {'<'} 8 {'<'} right (9)</li>
    </ul>

    <p className='text-black text-left mt-6 font-medium mb-2 '>Why use a BST?</p>
    <ul className="list-disc ml-6">
        <li className='explain-text'><strong>Fast search:</strong> Find a value in O(log N) time (for balanced trees).</li>
        {/* <li className='explain-text'><strong>Sorted order:</strong> Inorder traversal gives values in ascending order.</li> */}
        <li className='explain-text'><strong>Efficient insertion/deletion:</strong> Better than arrays for dynamic data.</li>
    </ul>

    <p className='text-black text-left mt-6 font-medium mb-2 '>Example of an invalid BST:</p>
    <div className='border-3 border-black w-70 rounded-xl flex justify-center items-center'>
        <p className='text-black text-sm  font-semibold text-left py-5 whitespace-pre-wrap'>     5<br />  /     \<br />3        8<br />       /     \ <br />     1        6</p>
    </div>
    <p className='explain-text mt-2'><strong>Problem:</strong> Node <code className='code'>1</code> is in the right subtree of <code className='code'>5</code>, but 1 {'<'} 5.<br/> This violates the BST property.</p>
</div>
        </div>
    )
}