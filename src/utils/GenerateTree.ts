import {Preorder, Preorder_bst} from './PreorderTree'
import {Postorder,Postorder_bst} from './PostorderTree'
import {ORDER_TYPE} from '../src/types/constants'


function checkValidInput(values : Array<string>)
{
    for (const el of values)
    {
        if (isNaN(Number(el)) && el != "null" && el != "None")
        {
            return false
        }
    }
    return true
}

export function BasicTree(values: Array<string>, sorttype:string) {

    let root = null
    console.log(values)
    if (checkValidInput(values) === false)
    {
        return {val:"", right:null, left:null, message:null}
    }
    if (sorttype === ORDER_TYPE.PREORDER)
    {
        root = Preorder(values)
    }
    if (sorttype === ORDER_TYPE.POSTORDER)
    {
        root = Postorder(values)
    }

    return root
}

export function BST(values: Array<string>, sorttype:string) {

    let root = null
    console.log(values)
    if (checkValidInput(values) === false)
    {
        return {val:"", right:null, left:null, message:null}
    }
    if (sorttype === ORDER_TYPE.PREORDER)
    {
        try {

            root = Preorder_bst(values)
        }
        catch (error)
        {if (error instanceof Error) {
            return {val:`Invalid binary search tree `,right:null, left:null, message : `(${error.message})`}

        }
        }
    }
    if (sorttype === ORDER_TYPE.POSTORDER)
    {
        try {

            root = Postorder_bst(values)
        }
        catch (error)
        {if (error instanceof Error) {
            return {val:`Invalid binary search tree `,right:null, left:null, message : `(${error.message})`}

        }
        }
    }

    return root
}