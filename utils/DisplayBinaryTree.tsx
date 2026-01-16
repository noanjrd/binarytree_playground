import "../src/App.css"

export default function DisplayBinaryTree({ root }: { root: any }) {
    if (!root) {
        return null
    }
    return (
        <>
            <div className="flex flex-col justify items-center">
                <div>
                    <p className="text-white">{root.val}</p>
                </div>
                {(root.left || root.right) && (
                    <div className="flex w-full justify-between items-start mt-1">
                        {root.left ? (
                            <div className="w-1/2 border-t border-l h-4"></div>
                        ) : (
                            <div className="w-1/2"></div>
                        )}
                        {root.right ? (
                            <div className="w-1/2 border-t border-r h-4"></div>
                        ) : (
                            <div className="w-1/2"></div>
                        )}
                    </div>
                )}
                <div className="flex flex-row gap-2">
                    <DisplayBinaryTree root={root.left} />
                    <DisplayBinaryTree root={root.right} />
                </div>
            </div>
        </>
    )
}