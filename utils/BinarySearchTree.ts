import { type TreeNode } from "../src/types/types"

function MakeBinarySearchTree(root:TreeNode, nb:number)
{
    console.log(nb)
    while (root != null)
    {
        if (root.val > nb)
        {
            if (root.left === null)
            {
                root.left = {val:nb, left:null, right:null}
                return
            }
            root = root.left
            continue
        }
        else
        {
            if (root.right === null)
            {
                root.right = {val:nb, left:null, right:null}
                return
            }
            root = root.right
            continue
        }
    }
    return 
}

export function SortTree(values:Array<number>)
{
    if (values.length === 0){
        return null
    }
    // const nblist = values.sort()
    console.log(values)
    let i = 1
    const root : TreeNode = {val:values[0], left:null,  right:null}
    while(i < values.length)
    {
        MakeBinarySearchTree(root, values[i])
        i++
    }
    return root
}