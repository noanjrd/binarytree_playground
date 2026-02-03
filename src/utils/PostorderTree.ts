import { type TreeNode } from "../src/types/types"

export  function Postorder(values:Array<string>)
{
    let i = values.length-1
    function build_tree() : TreeNode | null
    {
        if (i <0 || values[i] === "null" || values[i] === "None")
        {
            i--
            return null
        }
        const node : TreeNode = {val:values[i],left:null, right:null, message:null}
        i--
        node.right = build_tree()
        node.left = build_tree()
        return node
    }
    const root = build_tree()
    return root
}

export  function Postorder_bst(values:Array<string>)
{
    if (values[values.length-1] === "null" || values[values.length - 1] === "None")
    {
        return null
    }
    let max_allowed = -Infinity
    function build_tree(node:TreeNode|null,val:string) : TreeNode | null
    {
        if (Number(val) < max_allowed)
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
    const root : TreeNode = {val:values[values.length-1], left:null, right:null, message:null}
    let i = values.length-2
    while (i >= 0)
    {
        if (values[i] !== "null" && values[i] != "None")
            build_tree(root,values[i])
        i--
    }
    return root
}
