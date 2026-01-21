import {Preorder} from './PreorderTree'
import {Postorder} from './PostorderTree'
import {ORDER_TYPE} from '../src/types/constants'

export function MakeTree(values: Array<number>, sorttype:string) {

    let root = null
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