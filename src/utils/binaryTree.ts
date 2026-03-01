import {preorderTreeFromArray, preorderBSTFromArray} from './preorderTree'
import {postorderTreeFromArray, postorderBSTFromArray} from './postorderTree'
import {ORDER_TYPE} from '../types/constants'
import { type TreeNode } from '../types/types'


function checkValidInput(values : Array<string>)
{
    for (const el of values)
    {
        if (isNaN(Number(el)) && el != "null")
        {
            return false
        }
    }
    return true
}

export function getTreeDeepness(root: TreeNode | null): number
{
    if (root === null)
    {
        return 0
    }
    return 1 + Math.max(getTreeDeepness(root.left), getTreeDeepness(root.right))
}

export function buildTreeFromArray(values: Array<string>, sorttype:string)
{
    let root = null
    if (checkValidInput(values) === false)
    {
        return {val:"", right:null, left:null, message:null}
    }
    if (sorttype === ORDER_TYPE.PREORDER)
    {
        root = preorderTreeFromArray(values)
    }
    if (sorttype === ORDER_TYPE.POSTORDER)
    {
        root = postorderTreeFromArray(values)
    }
    return root
}

export function buildBSTFromArray(values: Array<string>, sorttype:string) {

    let root = null
    if (checkValidInput(values) === false)
        return {val:"", right:null, left:null, message:null}
    if (sorttype === ORDER_TYPE.PREORDER)
    {
        try
        {
            root = preorderBSTFromArray(values)
        }
        catch (error)
        {if (error instanceof Error) {
            return {val:`Invalid binary search tree `,right:null, left:null, message : `(${error.message})`}
        }
        }
    }
    if (sorttype === ORDER_TYPE.POSTORDER)
    {
        try
        {
            root = postorderBSTFromArray(values)
        }
        catch (error)
        {
            if (error instanceof Error)
            {
                return {val:`Invalid binary search tree `,right:null, left:null, message : `(${error.message})`}
            }  
        }
    }
    return root
}