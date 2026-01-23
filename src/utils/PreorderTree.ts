import { type TreeNode } from "../src/types/types"

// function fillNode(values:Array<string>,i:number,n:number, carry:number)
// {
//     if (i >= n || i < 0 )
//     {
//         return null
//     }
//     const root: TreeNode = {val:Number(values[i]), left:null, right:null}
//     if (values[2*i+1] === "null")
//         root.right = fillNode(values,2*i+2-carry,n,2)
//     else if (values[2*i+2] === "null")
//         root.left = fillNode(values,2*i+1,n, 2)
//     else
//     {
//         root.left = fillNode(values,2*i+1,n, carry)
//         root.right = fillNode(values,2*i+2,n, carry)
//     }
//     return root
// }

export  function Preorder(values:Array<string>)
{
    if (values.length === 0 || values[0] === "null")
    {
        return null
    }
    const root : TreeNode = {val:Number(values[0]), left:null, right:null}
    const queue : TreeNode[] = [root]
    let i = 1
    let change = 0
    while (i < values.length)
    {
        if (values[i] === "null")
        {
            queue.pop()
            i++
            continue
        }
        if (i < values.length && values[i] !== "null")
        {
            queue[queue.length-1].left = {val:Number(values[i]), left:null, right:null}
            queue.push(queue[queue.length-1].left!)
        }
        i++
        if (i < values.length && values[i] !== "null")
        {
            queue[queue.length-1].right = {val:Number(values[i]), left:null, right:null}
            queue.push(queue[queue.length-1].right!)
        }
        i++

    }

    return root
}

