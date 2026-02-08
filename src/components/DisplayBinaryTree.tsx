import "../styles/App.css"
import type { TreeNode } from "../types/types"


export default function DisplayBinaryTree({ root, deepness }: { root: TreeNode | null, deepness:number })
{
    if (!root)
    {
        return null
    }
    return (
        <>
            <div className="flex flex-col  items-center w-min">
                <div className="relative flex justify-center items-center">
                    <p className={`text-[#303030] text-center hover:opacity-75 font-semibold  ${deepness < 5 ? "text-xl" : "text-lg"}  ${deepness === 1 ? "w-100 " : ""}`}>{root.val}{deepness === 1 ? root.message : ""}</p>
                </div>
                {(root.left || root.right) && (
                    <div className="flex w-full justify-between items-start mt-3">
                        {root.left ? (
                            <div className="w-1/2 border-t-2 border-l-2 h-4 rounded-tl-lg border-[#303030]"></div>
                        ) : (
                            <div className="w-1/2"></div>
                        )}
                        {root.right ? (
                            <div className="w-1/2 border-t-2 border-r-2 h-4 rounded-tr-lg border-[#303030]"></div>
                        ) : (
                            <div className="w-1/2"></div>
                        )}
                    </div>
                )}
                <div className={`flex flex-row ${deepness < 5 ? "gap-6" : "gap-2"}`}>
                    <DisplayBinaryTree root={root.left} deepness={deepness}/>
                    <DisplayBinaryTree root={root.right} deepness={deepness} />
                </div>
            </div>
        </>
    )
}