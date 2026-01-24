import { useEffect, useRef, useState } from 'react'
import './style/App.css'
import { BasicTree, BST } from "../utils/BinaryTree.ts"
import DisplayBinaryTree from "./components/DisplayBinaryTree.tsx"
import { ToastContainer, toast, type Id } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import BurgerMenu from "./components/BurgerMenu.tsx"
import { type TreeNode } from './types/types.ts'
import { ORDER_TYPE, orderOptions } from './types/constants.ts'
import './style/radio.css'
import RadioGroup from './components/RadioGroup.tsx'



function App() {
  const [root, setRoot] = useState<TreeNode | null>(null)
  const [inputtext, setInputtext] = useState("")
  const toastIdRed = useRef<Id | null>(null)
  // const [isOpen, setIsOpen] = useState<boolean>(false)
  const [SearchTree, setSearchTree] = useState<boolean>(false)
  const [OrderType, setOrderType] = useState<string>(ORDER_TYPE.PREORDER)

  useEffect(() => {
    modifyliste(inputtext)
  }, [inputtext, SearchTree, OrderType])


  function getTreeDeepness(root: TreeNode | null): any {
    if (root === null)
      return 0
    return 1 + Math.max(getTreeDeepness(root.left), getTreeDeepness(root.right))
  }

  const modifyliste = ((text: string) => {
    if (text.length === 0) {
      return
    }
    const modtext = text.replace(/\[/g, "").replace(/\]/g, "")
    // console.log(modtext)


    const NumberArray = modtext.split(',').map(String)
    if (SearchTree === false) {
      try {
        setRoot(BasicTree(NumberArray, OrderType))
      }
      catch (error) {
        if (!toast.isActive(toastIdRed.current as Id)) {
          toastIdRed.current = toast.error("Format needed : [1,2,null,2,...]")
        }

      }
    }
    if (SearchTree === true) {
      try {
        setRoot(BST(NumberArray, OrderType))
      }
      catch (error) {
        if (!toast.isActive(toastIdRed.current as Id)) {
          toastIdRed.current = toast.error("Format needed : [1,2,null,2,...]")
        }
      }
    }
  })

  return (
    <>
      <div className=' w-full h-full '>
        <p className='text-4xl mb-10 font-bold mt-8 text-[#303030]'>Binary Tree Visualizer</p>

        <div className="flex flex-col items-center w-full h-full justify-center mb-10 ">
          <div className='flex flex-col gap-1 items-center mb-5'>

            <div>
              <input
                className="w-96 text-[#2c2c2c] border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFF8F3] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                placeholder='[1,7,null,8,...]'
                value={inputtext}
                onChange={(e) => setInputtext(e.target.value)}
              />
            </div>
            <div className='flex gap-1 flex-row justify-center items-center mt-1'>
              <RadioGroup options={orderOptions} value={OrderType} onChange={setOrderType} name="ordertypechange" />
              <button
                className='button-home   bg-[#A3332A]  hover:bg-[#a42017]'
                onClick={() => { setInputtext(""), setRoot(null) }}>Reset</button>
            </div>
            <button
              className='button-home   bg-[#648be9] hover:bg-[#4f7ce6]   '
              onClick={() => { setSearchTree(!SearchTree) }}>{!SearchTree ? "Turn into binary search tree" : "Turn into simple binary tree"}</button>
          </div>
          <DisplayBinaryTree root={root} deepness={getTreeDeepness(root)} />
          <ToastContainer />
          {/* <p className='text-red-900 text-xl'>COucou</p> */}
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default App
