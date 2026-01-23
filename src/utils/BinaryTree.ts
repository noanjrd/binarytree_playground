import {Preorder, Preorder_bst} from './PreorderTree'
import {Postorder} from './PostorderTree'
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
        console.error("Wrong fromat")
        throw new Error("Wrong type of number");
    }
    if (sorttype === ORDER_TYPE.PREORDER)
    {
        root = Preorder(values)
    }
    // if (sorttype === ORDER_TYPE.POSTORDER)
    // {
    //     root = Postorder(values)
    // }

    return root
}

export function BST(values: Array<string>, sorttype:string) {

    let root = null
    console.log(values)
    if (checkValidInput(values) === false)
    {
        console.error("Wrong fromat")
        throw new Error("Wrong type of number");
    }
    if (sorttype === ORDER_TYPE.PREORDER)
    {
        root = Preorder_bst(values)
    }
    // if (sorttype === ORDER_TYPE.POSTORDER)
    // {
    //     root = Postorder(values)
    // }

    return root
}