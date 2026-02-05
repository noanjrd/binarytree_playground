import '../../style/App.css'
import '../../style/Explainations.css'
import DisplayBinaryTree from '../DisplayBinaryTree'
import type { TreeNode } from '../../types/types'
import { GenerateRandomTree } from '../../../utils/GenerateTree'
import { getTreeDeepness } from "../../../utils/BinaryTree"

export interface Props {
    root: TreeNode | null;
    deepness: number;
    setRoot: (val: TreeNode) => void
    setDeepness: (val: number) => void
}

export function ChallengeCard({ root, setRoot, setDeepness, deepness }: Props) {

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
                    <select 
                        className='text-black rounded-full font-semibold border-2 border-black  px-4 py-2 shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]  transition-all cursor-pointer'
                        value={deepness} 
                        onChange={(e) => setDeepness(Number(e.target.value))}
                    >
                        <option value="2">Depth: 2</option>
                        <option value="3">Depth: 3</option>
                        <option value="4">Depth: 4</option>
                        <option value="5">Depth: 5</option>
                    </select>
                    <button className=' button-home-black ' onClick={() => setRoot(GenerateRandomTree(deepness))}
                    >Regenerate
                    </button>
                </div>
            </div>

        </div>
    )
}