import { useEffect, useState } from 'react'
import './style/App.css'
import { BasicTree, BST } from "../utils/BinaryTree.ts"
import DisplayBinaryTree from "./components/DisplayBinaryTree.tsx"
// import 'react-toastify/dist/ReactToastify.css';
// import BurgerMenu from "./components/BurgerMenu.tsx"
import { type TreeNode } from './types/types.ts'
import { ORDER_TYPE, orderOptions } from './types/constants.ts'
import './style/radio.css'
import RadioGroup from './components/RadioGroup.tsx'
import { Explainations } from './components/Explainations.tsx';


function App() {
  const [root, setRoot] = useState<TreeNode | null>(null)
  const [inputtext, setInputtext] = useState("")
  // const toastIdRed = useRef<Id | null>(null)
  // const [isOpen, setIsOpen] = useState<boolean>(false)
  const [SearchTree, setSearchTree] = useState<boolean>(false)
  const [OrderType, setOrderType] = useState<string>(ORDER_TYPE.PREORDER)
  const [actionStarted, setActionStarted] = useState<string>("base")

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
        // if (!toast.isActive(toastIdRed.current as Id)) {
        //   toastIdRed.current = toast.error("Format needed : [1,2,null,2,...]")
        // }

      }
    }
    if (SearchTree === true) {
      try {
        setRoot(BST(NumberArray, OrderType))
      }
      catch (error) {
        // if (!toast.isActive(toastIdRed.current as Id)) {
        //   toastIdRed.current = toast.error("Format needed : [1,2,null,2,...]")
        // }
      }
    }
  })

  if (0)
    setActionStarted("base")
  return (
    <>
      <div className='flex flex-col w-full h-full items-center '>
        <p className='text-4xl mb-15 font-bold mt-8  text-black'>Binary Tree Visualizer</p>
        <div className='flex flex-col lg:flex-row justify-center w-full xl:w-350'>
          <div className='  w-full flex flex-col items-center ml-4'>
            <Explainations actionStarted={actionStarted} />
            {/* <img src={bgtext} className='w-250 h-full ' /> */}
          </div>
          <div className="flex flex-col items-center w-full h-full justify-center mb-10 mt-5 lg:mt-0  ">
            <div className='flex flex-col gap-1 items-center mb-2'>
              <p className='text-black font-semibold text-3xl mb-5'>Interactive Binary Tree</p>

              <div>
                <input
                  className="w-70 lg:w-80 text-[#2c2c2c] border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFF8F3] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  placeholder='[1,7,null,8,...]'
                  value={inputtext}
                  onChange={(e) => { setInputtext(e.target.value); }}
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
            <div className='binarytree relative overflow-y-auto overflow-x-auto py-8
             h-85 scrollbar-none w-80 lg:w-100 flex justify-center '>
              <DisplayBinaryTree root={root} deepness={getTreeDeepness(root)} />
            </div>
            {/* <p className='text-red-900 text-xl'>COucou</p> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default App
