import { type TreeNode } from "../types/types"


export function Preorder(values:Array<string>)
{
    let i = 0
    function build_tree() : TreeNode | null
    {
        if (i >= values.length || values[i] === "null")
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

export function Preorder_bst(values:Array<string>)
{
    let i = 0
    function build_tree(min:number,max:number) : TreeNode | null
    {
        while(values[i] === "null" && i < values.length)
        {
            i++
        }
        if (i >= values.length)
        {
            return null
        }
        const value = Number(values[i])
        if (value < min || value >= max)
        {
            return null
        }
        const node : TreeNode = {val:String(value), left:null, right:null, message:null }
        i++
        node.left = build_tree(min,value)
        node.right = build_tree(value,max)
        return node
    }
    const root = build_tree(-Infinity, Infinity)
    if (i < values.length)
    {
        throw new Error(values[i])
    }
    return root
}

export function GetPreorderList(root : TreeNode | null)  : string
{
    let answer = ""
    function buildAnswer(node : TreeNode | null)
    {
        if (node === null || node.val === "null")
        {
            answer += ",null"
            return
        }
        answer += `,${node?.val}`
        buildAnswer(node!.left)
        buildAnswer(node!.right)
    }
    buildAnswer(root)
    answer = answer.slice(1)
    return answer
}