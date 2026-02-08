import { useEffect, useState } from 'react'
import './styles/App.css'
import { BasicTree, BST } from "./utils/binaryTree.ts"
import DisplayBinaryTree from "./components/DisplayBinaryTree.tsx"
import QuestionIcon from "./assets/question.svg"
import { type TreeNode } from './types/types.ts'
import { ORDER_TYPE, orderOptions } from './types/constants.ts'
import './styles/radio.css'
import RadioGroup from './components/RadioGroup.tsx'
import GithubIcon from "./assets/githubicon.png"
import { Explanations } from './components/explanations/Explanations.tsx';
import { getTreeDeepness } from "./utils/binaryTree.ts"
import { loadTreeFromStorage, saveTreeToStorage } from './utils/storage.ts'

export default function App() {

  const [root, setRoot] = useState<TreeNode | null>(null)
  const [inputtext, setInputtext] = useState("")
  const [SearchTree, setSearchTree] = useState<boolean>(false)
  const [OrderType, setOrderType] = useState<string>(ORDER_TYPE.PREORDER)
  const [tabOption, setTabOption] = useState<string>("Binary Tree")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isLoaded, setisLoaded] = useState(false)

  useEffect(() => {
    if (isLoaded)
    {
      saveTreeToStorage({
        inputtext: inputtext,
        OrderType: OrderType,
        SearchTree : SearchTree,
        tabOption : tabOption
      })
    }
  }, [inputtext, SearchTree, OrderType, tabOption, isLoaded])
  
  useEffect(() => {
    modifyliste(inputtext)
  }, [inputtext, SearchTree, OrderType])

  useEffect(() => {
    const saved = loadTreeFromStorage()
    setScreenWidth(window.innerWidth)
    if (saved) {
      setInputtext(saved.inputtext)
      setOrderType(saved.OrderType)
      setTabOption(saved.tabOption)
      setSearchTree(saved.SearchTree)
    }
    setisLoaded(true)
  }, [])

  const modifyliste = ((text: string) => {
    if (text.length === 0) {
      return
    }
    const modtext = text.replace(/\[/g, "").replace(/\]/g, "").replace(/\s+/g, "")
    const NumberArray = modtext.split(',').map(String).filter(element => element !== "")
    if (SearchTree === false) {
      try {
        setRoot(BasicTree(NumberArray, OrderType))
      }
      catch (error) {
        console.error(error)
      }
    }
    if (SearchTree === true) {
      try {
        setRoot(BST(NumberArray, OrderType))
      }
      catch (error) {
        console.error(error)
      }
    }
  })

  if (screenWidth < 640) {
    return (
      <div className='flex w-full gap-5   flex-col min-h-screen justify-center items-center'>
        <p className='text-black font-bold text-3xl'>Binary Tree Playground</p>
        <p className='text-black font-semibold'>Not available on mobile yet.</p>
      </div>
    )
  }
  return (
    <>
      <div className='relative flex flex-col w-full min-h-screen items-center '>
        <div className='bottom-3  hover:opacity-70 cursor-pointer fixed '>
          <a href='https://github.com/noanjrd/binarytree_playground'>
            <img src={GithubIcon} width={50} height={50} />
          </a>
        </div>
        <p className='text-4xl mb-8 lg:mb-12 font-bold mt-8 text-center text-black'>Binary Tree Playground</p>
        <div className='flex flex-col lg:flex-row justify-center w-full xl:w-322'>
          <div className='  w-full flex flex-col items-center'>
            <Explanations explanationFor={tabOption} setInputText={setInputtext}
              setExplanationFor={setTabOption} OrderType={OrderType} setOrderType={setOrderType} />
          </div>
          <div className="flex flex-col items-center w-full mb-10 mt-5 lg:mt-0  ">
            <div className='flex flex-col gap-1 items-center mb-2'>
              <p className='text-black font-semibold text-3xl mb-5'>Binary Tree Visualizer</p>

              <div className=' relative flex flex-row items-center'>
                <input
                  className="w-70 lg:w-80 text-[#2c2c2c] border-black border-2 p-2.5 
                  focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  placeholder='Type here : [1,7,null,8,...]'
                  value={inputtext}
                  onChange={(e) => { setInputtext(e.target.value); }}
                />
                <div className='absolute -right-7 group  cursor-pointer'>
                  <img className='hover:opacity-70' src={QuestionIcon} width={20} />
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 
                   top-full mt-2 w-60 bg-black/65 text-white text-sm rounded-lg p-3 z-50 pointer-events-none '>
                    <p>Enter your binary tree values in array format. Use "null" for empty nodes.</p>
                    <p className='mt-1'>Example: [1,2,3,null,4,5,null]</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-1 flex-row justify-center items-center mt-1'>
                <RadioGroup options={orderOptions} value={OrderType} onChange={setOrderType} name="ordertypechange" tabOption={tabOption} setTabOption={setTabOption} />
                <button
                  className='button-home button-red'
                  onClick={() => { setInputtext(""), setRoot(null) }}>Reset
                </button>
              </div>
              <button
                className='button-home button-blue'
                onClick={() => { setSearchTree(!SearchTree) }}>{!SearchTree ? "Turn into binary search tree" : "Turn into simple binary tree"}</button>
            </div>
            <div className='binarytree relative overflow-y-auto overflow-x-auto  py-5
             scrollbar-none w-80 lg:w-120 flex justify-center  min-h-60 max-h-[calc(100vh-400px)] '>
              <DisplayBinaryTree root={root} deepness={getTreeDeepness(root)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 