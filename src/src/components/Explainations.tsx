import '../style/App.css'


interface ExplainationsGroupProps {
    actionStarted : string
}

export function Explainations({actionStarted} : ExplainationsGroupProps) {
    return (
        <>
            <div className='overflow-y-auto h-full scrollbar-none '
                style={{
                    scrollbarWidth: "none",   // Firefox
                    msOverflowStyle: "none"   // IE 10+
                }}>
                {actionStarted === "base" && (
                    <div className='mb-6 '>
                        <p className='text-3xl text-left text-black font-semibold mb-3 '>What is a Binary Tree?</p>
                        <p className='explain'>A <strong>binary tree</strong> is a data structure where:</p>
                        <ul className="list-disc ml-6 mt-1">
                            <li className='explain'>Each node has <strong>at most two children</strong>: a left child and a right child.</li>
                            <li className='explain'>The top node is called the <strong>root</strong>.</li>
                            <li className='explain'>Nodes with no children are called <strong>leaves</strong>.</li>
                        </ul>
                        <p className='text-black text-left mt-6 font-medium mb-2 '>Example:</p>
                        <div className='border-3 border-black w-70 rounded-xl flex justify-center items-center'>
                            <p className='text-black text-sm  font-semibold text-left py-5 whitespace-pre-wrap'>     1<br />  /     \<br />8        3<br />       /     \<br />     4        5</p>
                        </div>
                        <ul className="list-disc ml-6 ">
                            <li className='explain'><code className='bg-black/10 px-0.5 rounded-xs'>1</code> is the root.</li>
                            <li className='explain'><code className='bg-black/10 px-0.5 rounded-xs'>8</code> and <code className='bg-black/10 px-0.5 rounded-xs'>3</code> are children of <code className='bg-black/10 px-0.5 rounded-xs'>1</code>.</li>
                            <li className='explain'><code className='bg-black/10 px-0.5 rounded-xs'>4</code> and <code className='bg-black/10 px-0.5 rounded-xs'>5</code> are children of <code className='bg-black/10 px-0.5 rounded-xs'>3</code>.</li>
                            <li className='explain'><code className='bg-black/10 px-0.5 rounded-xs'>8</code>, <code className='bg-black/10 px-0.5 rounded-xs'>3</code>, <code className='bg-black/10 px-0.5 rounded-xs'>4</code>, and <code className='bg-black/10 px-0.5 rounded-xs'>5</code> are leaves.</li>
                        </ul>
                    </div>

                )}
                {/* { actionStarted === true && (
                <div className=''>
                    <p className='text-3xl text-left text-black font-semibold mb-3 '>What is Preorder Traversal?</p>
                    <p className='explain'><strong>Traversal</strong> is the process of visiting all nodes in a tree in a specific order.</p>
                    <p className='explain'>Preorder traversal follows this rule:</p>
                    <ul className="list-decimal ml-6 ">
                        <li className='explain'><strong>Visit the root node</strong> first.</li>
                        <li className='explain'><strong>Traverse the left subtree</strong> in preorder.</li>
                        <li className='explain'><strong>Traverse the right subtree</strong> in preorder.</li>

                    </ul>
                </div>

                )} */}

            </div>
        </>
    )
}