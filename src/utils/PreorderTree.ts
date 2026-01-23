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
        const node : TreeNode = {val:Number(values[i]),left:null, right:null}
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
    function build_tree(node:TreeNode|null,val:number) : TreeNode | null
    {
        if (node === null)
        {
            const temp : TreeNode = {val:val, right:null, left:null}
            return temp
        }
        if (val < Number(node.val))
        {
            node.left =  build_tree(node.left,val)
        }
        else
        {
            node.right = build_tree(node.right,val)
        }
        return node
    }
    const root : TreeNode = {val:Number(values[0]), left:null, right:null}
    let i = 1
    while (i < values.length)
    {
        if (values[i] !== "null" && values[i] != "None")
            build_tree(root,Number(values[i]))
        i++
    }
    return root
}

// voir le cas ou par exemple 1,2,3,0 n est pas possible