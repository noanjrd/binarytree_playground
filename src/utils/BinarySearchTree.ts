import { type TreeNode } from "../src/types/types"
import {ORDER_TYPE} from "../src/types/constants"

function Preorder(root:TreeNode, values:Array<string>, i:number)
{
    if (i >= values.length)
    {
        return
    }
    let rootcpy = root
    while (rootcpy != null)
    {
        if (rootcpy.val === "null")
        {

        }
        if (Number(rootcpy.val) > Nuvalues[i])
        {
            if (rootcpy.left === null)
            {
                rootcpy.left = {val:values[i], left:null, right:null}
                return Preorder(root,values, i+1)
            }
            rootcpy = rootcpy.left
            continue
        }
        else
        {
            if (rootcpy.right === null)
            {
                rootcpy.right = {val:values[i], left:null, right:null}
                return Preorder(root,values,i+1)
            }
            rootcpy = rootcpy.right
            continue
        }
    }
    return 
}

function Postorder(root:TreeNode, values:Array<number>, i:number)
{
    if (i < 0)
    {
        return
    }
    let rootcpy = root
    while (rootcpy != null)
    {
        if (rootcpy.val > values[i])
        {
            if (rootcpy.left === null)
            {
                rootcpy.left = {val:values[i], left:null, right:null}
                return Postorder(root,values, i-1)
            }
            rootcpy = rootcpy.left
            continue
        }
        else
        {
            if (rootcpy.right === null)
            {
                rootcpy.right = {val:values[i], left:null, right:null}
                return Postorder(root,values,i-1)
            }
            rootcpy = rootcpy.right
            continue
        }
    }
    return 
}

export function SortTree(values:Array<string>,type:string)
{
    if (values.length === 0){
        return null
    }
    let root : TreeNode =  {val:0, left:null,  right:null} ;
    if (type === ORDER_TYPE.PREORDER)
    {
        root = {val:values[0], left:null,  right:null}
        Preorder(root,values,1)
    }
    // if (type === ORDER_TYPE.POSTORDER)
    // {
    //     root = {val:values[values.length-1], left:null,  right:null}
    //     Postorder(root,values,(values.length)-2)
    // }
    return root
}