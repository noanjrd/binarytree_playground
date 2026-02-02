import '../../style/App.css'
import '../../style/Explainations.css'

interface ExplainationsGroupProps {
}

export function BasicExplainations() {
    
    return (
        <div className='mb-6 '>
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
        </div>
    )
}