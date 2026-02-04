import '../../style/App.css'
import '../../style/Explainations.css'
import DisplayBinaryTree from '../DisplayBinaryTree'
import type { TreeNode } from '../../types/types'
import { GenerateRandomTree } from '../../../utils/GenerateTree'
import { getTreeDeepness } from "../../../utils/BinaryTree"

export interface Props
{
    root : TreeNode | null;
    setRoot: (val:TreeNode) => void
}

export function ChallengeCard({root, setRoot} : Props) {


    return (
        <div className='card min-w-130 relative px-5 py-5  overflow-y-auto  scrollbar-none max-h-[66vh] flex justify-center'
            style={{
                scrollbarWidth: "none",   // Firefox
                msOverflowStyle: "none"   // IE 10+
            }}>
            <div className='flex flex-col'>
                <p className='relative text-3xl text-left text-black font-semibold mb-2 w-fit'>
                    <span className="absolute left-0 bottom-0 w-full h-4 bg-[#ff9494] -z-10 invisible sm:visible"></span>
                    Binary Tree Challenge
                </p>
                <p className=' text-left text-black  w-fit'>
                    Try to recreate the binary trees using the visualizer to the right.
                </p>
                <div className='flex justify-center items-center mt-5 '>
                    <DisplayBinaryTree root={root} deepness={getTreeDeepness(root)} />
                </div>
                <div className='flex gap-1 flex-row justify-center items-center mt-8'>
                    <button className=' button-home-black ' onClick={() => setRoot(GenerateRandomTree(3))}
                    >Regenerate
                    </button>
                </div>
            </div>

        </div>
    )
}