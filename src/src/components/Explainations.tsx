import '../style/App.css'



export function Explainations() {
    return (
        <>
            <div className='overflow-y-auto h-11/12 scrollbar-none '
            style={{
                scrollbarWidth: "none",   // Firefox
                msOverflowStyle: "none"   // IE 10+
            }}>
                <div className='mb-6 '>
                    <p className='text-3xl text-left text-black font-semibold mb-3 '>What is a Binary Tree?</p>
                    <p className='explain'>A <strong>binary tree</strong> is a data structure where:</p>
                    <ul className="list-disc ml-6 mt-1">
                        <li className='explain'>Each node has <strong>at most two children</strong>: a left child and a right child.</li>
                        <li className='explain'>The top node is called the <strong>root</strong>.</li>
                        <li className='explain'>Nodes with no children are called <strong>leaves</strong>.</li>
                    </ul>
                    <p className='text-black text-left mt-4 font-medium mb-2 '>Example:</p>
                    <div className='border-3 border-black w-80 rounded-xl flex justify-center items-center'>
                        <p className='text-black font-semibold text-left py-5 whitespace-pre-wrap'>     1<br />  /     \<br />2        3<br />        /     \<br />      4        5</p>
                    </div>
                    <ul className="list-disc ml-6 ">
                        <li className='explain'>1 is the root.</li>
                        <li className='explain'>2 and 3 are children of 1.</li>
                        <li className='explain'>4 and 5 are children of 2.</li>
                        <li className='explain'>4 and 5 are children of 2.</li>
                        <li className='explain'>3, 4, and 5 are leaves.</li>
                    </ul>
                </div>
                <div className=''>
                    <p className='text-3xl text-left text-black font-semibold mb-3 '>What is Preorder Traversal?</p>
                    <p className='explain'>Traversal is the process of visiting all nodes in a tree in a specific order.</p>
                    <p className='explain'>Preorder traversal follows this rule:</p>
                    <ul className="list-decimal ml-6 ">
                        <li className='explain'><code className="bg-black/10 px-1 py-0.5 rounded">1</code> is the root.</li>
                        <li className='explain'>2 and 3 are children of 1.</li>
                        <li className='explain'>4 and 5 are children of 2.</li>
                        <li className='explain'>4 and 5 are children of 2.</li>
                        <li className='explain'>3, 4, and 5 are leaves.</li>

                    </ul>
                </div>

            </div>
        </>
    )
}