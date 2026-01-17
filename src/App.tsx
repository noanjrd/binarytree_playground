import { useEffect, useRef, useState } from 'react'
import './App.css'
import { MakeBinaryTree, SortTree } from "../utils/Binarytrees.ts"
import DisplayBinaryTree from "../utils/DisplayBinaryTree.tsx"
import { ToastContainer, toast, type Id } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BurgerMenu from "../utils/BurgerMenu.tsx"

type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function App() {
  const [nblist, setNblist] = useState<number[]>([])
  const [root, setRoot] = useState<TreeNode | null>(null)
  const [inputtext, setInputtext] = useState("")
  const toastIdRed = useRef<Id | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    modifyliste(inputtext)
  }, [inputtext])

  function getTreeDeepness(root: TreeNode | null): any {
    if (root === null)
      return 0
    return 1 + Math.max(getTreeDeepness(root.left), getTreeDeepness(root.right))
  }

  const modifyliste = ((text: string) => {
    if (text.length === 0) {
      setNblist([])
      return
    }
    const modtext = text.replace(/\[/g, "").replace(/\]/g, "")
    console.log(modtext)

    for (let i = 0; i < modtext.length; i++) {
      if (isNaN(Number(modtext[i])) && modtext[i] != ',' && modtext[i] != '.') {
        console.error("Only number")
        if (!toast.isActive(toastIdRed.current as Id)) {
          toastIdRed.current = toast.error("Format needed : [1,2,3,...]")
        }
        return
      }

    }
    const NumberArray = modtext.split(',').map(Number)
    setNblist(NumberArray)
    setRoot(MakeBinaryTree(NumberArray))
  })

  const sortList = (() => {
    setRoot(SortTree(nblist))

  })
  return (
    <>
      <div className="flex flex-col items-center w-full h-full relative justify-center ">
        <div onClick={() => setIsOpen(!isOpen)} className=''>
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <p className='text-4xl mb-10 font-semibold mt-12'>Binary Tree Visualizer (preorder)</p>
        <div className='flex flex-col gap-2 items-center mb-5'>
          <div>
            <input
              className="w-90 h-10 bg-white text-black rounded-sm  px-2 items-center justify-center"
              placeholder='Enter your binary tree here'
              value={inputtext}
              onChange={(e) => setInputtext(e.target.value)}
            />
          </div>
          <div className='flex gap-1 '>
            <button
              className='h-10 w-20 rounded-lg text-center bg-[#82251e] cursor-pointer font-sans font-medium hover:bg-[#82251e]/80'
              onClick={() => { setInputtext(""), setRoot(null) }}>Reset</button>
            <button
              className='h-10 w-50 rounded-lg text-center bg-[#50476b] cursor-pointer font-sans font-medium hover:bg-[#50476b]/80'
              onClick={sortList}>Make binary search tree</button>
          </div>
        </div>
        <DisplayBinaryTree root={root} deepness={getTreeDeepness(root)} />
        <ToastContainer />
        {/* <p className='text-red-900 text-xl'>COucou</p> */}
      </div>
    </>
  )
}

export default App
