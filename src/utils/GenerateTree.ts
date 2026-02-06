import { type TreeNode } from '../src/types/types'


function GetRandomInt(max:number)
{
    const val = Math.floor(Math.random() * max  + 1)
    return val
}

export function GenerateRandomTree(deepnessMax:number, deepness:number = 0)
{
    const value = GetRandomInt(19)
    const node : TreeNode = {val:String(value),left:null, right:null, message:null }
    if (deepness >= deepnessMax)
    {
        return (node)
    }
    let chance1 = 1
    let chance2 = 1
    if ((deepness !== 0 && deepnessMax >= 3) || (deepnessMax < 3))
    {
        let random = GetRandomInt(2)
        if (random === 1)
        {
            chance1 = GetRandomInt(2)
            if (chance1 === 2)
            {
                chance2 == 1
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
    {
        node.left = GenerateRandomTree(deepnessMax, deepness+1)
    }
    if (chance2 === 1)
    {
        node.right = GenerateRandomTree(deepnessMax, deepness+1)
    }
    return (node) 
}

