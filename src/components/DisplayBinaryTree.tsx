import "../App.css"


export default function DisplayBinaryTree({ root, deepness }: { root: any, deepness:any }) {
    if (!root) {
        return null
    }
    return (
        <>
            <div className="flex flex-col  items-center w-min">
                <div className="relative flex justify-center items-center">
                    <p className={`text-white text-center hover:opacity-75  ${deepness < 5 ? "text-xl" : "text-lg"}`}>{root.val}</p>
                </div>
                {(root.left || root.right) && (
                    <div className="flex w-full justify-between items-start mt-3">
                        {root.left ? (
                            <div className="w-1/2 border-t border-l h-4 rounded-tl-lg"></div>
                        ) : (
                            <div className="w-1/2"></div>
                        )}
                        {root.right ? (
                            <div className="w-1/2 border-t border-r h-4 rounded-tr-lg"></div>
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