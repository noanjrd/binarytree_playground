import { type TreeNode } from '../types/types.ts'


function GetRandomInt(max:number)
{
    const val = Math.floor(Math.random() * max  + 1)
    return val
}

export function GenerateRandomTree(maxDepth:number, depth:number = 0)
{
    const value = GetRandomInt(19)
    const node : TreeNode = {val:String(value),left:null, right:null, message:null }
    if (depth >= maxDepth)
    {
        return (node)
    }
    let chance1 = 1
    let chance2 = 1
    if ((depth !== 0 && maxDepth >= 3) || (maxDepth < 3))
    {
        const random = GetRandomInt(2)
        if (random === 1)
        {
            chance1 = GetRandomInt(2)
            if (chance1 === 2)
            {
                chance2 = 1
            }
            else
            {
                chance2 = GetRandomInt(2)
            }
        }
        else 
        {
            chance2 = GetRandomInt(2)
            if (chance2 === 2)
            {
                chance1 = 1
            }
            else
            {
                chance1 = GetRandomInt(2)
            }
        }
    }
    if (chance1 === 1)
        node.left = GenerateRandomTree(maxDepth, depth+1)
    if (chance2 === 1)
        node.right = GenerateRandomTree(maxDepth, depth+1)
    return (node)
}

