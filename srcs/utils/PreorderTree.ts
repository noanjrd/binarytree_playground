import { type TreeNode } from "../src/types/types"

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

export  function Preorder(values:Array<number>)
{
    if (values.length === 0)
    {
        return null
    }
    let i = 0
    const root = fillNode(values,i,values.length)
    return root
}

