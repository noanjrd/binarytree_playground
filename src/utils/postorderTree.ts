import { type TreeNode } from "../types/types"


export function Postorder(values:Array<string>)
{
    let i = values.length-1
    function build_tree() : TreeNode | null
    {
        if (i <0 || values[i] === "null")
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
export function Postorder_bst(values:Array<string>)
{
    let i = values.length -1
    function build_tree(min:number,max:number) : TreeNode | null
    {
        while(values[i] === "null" && i >= 0)
        {
            i--
        }
        if (i < 0)
        {
            return null
        }
        const value = Number(values[i])
        if (value < min || value >= max)
        {
            return null
        }
        const node : TreeNode = {val:String(value), left:null, right:null, message:null }
        i--
        node.right = build_tree(value,max)
        node.left = build_tree(min,value)
        return node
    }
    const root = build_tree(-Infinity, Infinity)
    if (i >= 0)
    {
        throw new Error(values[i])
    }
    return root
}

export function GetPostorderList(root : TreeNode | null)  : string
{
    let answer = ""
    function buildAnswer(node : TreeNode | null)
    {
        if (node === null || node.val === "null")
        {
            answer += ",null"
            return
        }
        buildAnswer(node!.left)
        buildAnswer(node!.right)
        answer += `,${node?.val}`
    }
    buildAnswer(root)
    answer = answer.slice(1)
    return answer
}