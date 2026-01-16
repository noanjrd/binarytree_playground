type TreeNode = {
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;
}

function fillNode(values:Array<number>,i:number,n:number)
{
    if (i >= n )
    {
        return null
    }
    const root: TreeNode = {val:values[i], left:null, right:null}
    root.left = fillNode(values,2*i+1,n)
    root.right = fillNode(values,2*i+2,n)
    return root
}

export default function MakeBinaryTree(values:Array<number>)
{
    let i = 0
    const root = fillNode(values,i,values.length)
    return root
}