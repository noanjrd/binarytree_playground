import { type TreeNode } from '../src/types/types'

function GetRandomInt(max:number)
{
    const val = Math.floor(Math.random() * max  + 1)
    return val
}

export function GenerateRandomTree(deepnessMax:number, deepness:number = 0)
{
    const value = GetRandomInt(20)
    const node : TreeNode = {val:String(value),left:null, right:null, message:null }
    if (deepness >= deepnessMax)
    {
        return (node)
    }
    let chance = GetRandomInt(2)
    console.log(chance)
    if (chance === 1)
    {
        node.left = GenerateRandomTree(deepnessMax, deepness+1)
    }
    chance = GetRandomInt(1)
    if (chance === 1)
    {
        node.right = GenerateRandomTree(deepnessMax, deepness+1)
    }

    return (node) 
}

