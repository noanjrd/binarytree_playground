import { type TreeNode } from "../src/types/types"

export  function Preorder(values:Array<string>)
{

    let i = 0
    function build_tree() : TreeNode | null
    {
        if (i >= values.length || values[i] === "null" || values[i] === "None")
        {
            i++
            return null
        }
        const node : TreeNode = {val:values[i],left:null, right:null, message:null}
        i++
        node.left = build_tree()
        node.right = build_tree()
        return node
    }
    const root = build_tree()
    return root
}

export  function Preorder_bst(values:Array<string>)
{
    if (values[0] === "null" || values[0] === "None")
    {
        return null
    }
    let max_allowed = -Infinity
    function build_tree(node:TreeNode|null,val:string) : TreeNode | null
    {
        if (Number(val) <= max_allowed)
        {
            throw new Error(val)
        }
        if (node === null)
        {
            const temp : TreeNode = {val:val, right:null, left:null, message:null}
            return temp
        }
        if (Number(val) < Number(node.val))
        {
            node.left =  build_tree(node.left,val)
        }
        else
        {
            max_allowed = Number(node.val)
            node.right = build_tree(node.right,val)
        }
        return node
    }
    const root : TreeNode = {val:values[0], left:null, right:null, message:null}
    let i = 1
    while (i < values.length)
    {
        if (values[i] !== "null" && values[i] != "None")
            build_tree(root,values[i])
        i++
    }
    return root
}

// voir le cas ou par exemple 1,2,3,0 n est pas possible