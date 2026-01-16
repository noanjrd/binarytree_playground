type TreeNode = {
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;
}

function fillNode(values:Array<number>,i:number,n:number)
{
    if (i >= n )
    {
        return null
    }
    const root: TreeNode = {val:values[i], left:null, right:null}
    root.left = fillNode(values,2*i+1,n)
    root.right = fillNode(values,2*i+2,n)
    return root
}

export  function MakeBinaryTree(values:Array<number>)
{
    if (values.length === 0)
    {
        return null
    }
    let i = 0
    const root = fillNode(values,i,values.length)
    return root
}

function MakeBinarySearchTree(root:TreeNode, nb:number)
{
    console.log(nb)
    while (root != null)
    {
        if (root.val > nb)
        {
            if (root.left === null)
            {
                root.left = {val:nb, left:null, right:null}
                return
            }
            root = root.left
            continue
        }
        else
        {
            if (root.right === null)
            {
                root.right = {val:nb, left:null, right:null}
                return
            }
            root = root.right
            continue
        }
    }
    return 
}

export function SortTree(values:Array<number>)
{
    if (values.length === 0){
        return null
    }
    // const nblist = values.sort()
    console.log(values)
    let i = 1
    const root : TreeNode = {val:values[0], left:null,  right:null}
    while(i < values.length)
    {
        MakeBinarySearchTree(root, values[i])
        i++
    }
    return root
}