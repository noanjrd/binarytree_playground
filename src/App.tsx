import './styles/radio.css'
import './styles/App.css'
import { useEffect, useState } from 'react'
import { BasicTree, BST } from "./utils/binaryTree.ts"
import DisplayBinaryTree from "./components/DisplayBinaryTree.tsx"
import QuestionIcon from "./assets/question.svg"
import { type TreeNode } from './types/types.ts'
import { orderOptions } from './types/constants.ts'
import RadioGroup from './components/RadioGroup.tsx'
import GithubIcon from "./assets/githubicon.png"
import { Explanations } from './components/explanations/Explanations.tsx';
import { getTreeDeepness } from "./utils/binaryTree.ts"
import { loadTreeFromStorage, saveTreeToStorage } from './utils/storage.ts'
import { useTreeContext } from './contexts/TreeContext.tsx'

export default function App() {

  const [root, setRoot] = useState<TreeNode | null>(null)
  const [searchTree, setSearchTree] = useState<boolean>(false)
  const [tabOption, setTabOption] = useState<string>("Binary Tree")
  const [isLoaded, setisLoaded] = useState(false)
  const {setTraversalType, traversalType, setInputText, inputText} = useTreeContext()
  const screenWidth = window.innerWidth

  useEffect(() => {
    if (isLoaded) {
      saveTreeToStorage({
        inputText: inputText,
        traversalType: traversalType,
        searchTree: searchTree,
        tabOption: tabOption
      })
    }
  }, [inputText, searchTree, traversalType, tabOption, isLoaded])


  useEffect(() => {
    setisLoaded(true)
  }, [])


  useEffect(() => {
    const saved = loadTreeFromStorage()
    if (saved) {
      setInputText(saved.inputText)
      setTraversalType(saved.traversalType)
      setTabOption(saved.tabOption)
      setSearchTree(saved.searchTree)
    }
  }, [])


  useEffect(() => {
    console.log(inputText)
    const text = inputText
      if (!text || text.length === 0)
        return
      const modtext = text.replace(/\[/g, "").replace(/\]/g, "").replace(/\s+/g, "")
      const NumberArray = modtext.split(',').map(String).filter((element:any) => element !== "")
      if (searchTree === false) {
        try {
          setRoot(BasicTree(NumberArray, traversalType))
        }
        catch (error) {
          console.error(error)
        }}
      if (searchTree === true) {
        try {
          setRoot(BST(NumberArray, traversalType))
        }
        catch (error) {
          console.error(error)
        }}
  }, [inputText, searchTree, traversalType])

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
            <Explanations tabOption={tabOption}  setTabOption={setTabOption} />
          </div>
          <div className="flex flex-col items-center w-full mb-10 mt-5 lg:mt-0  ">
            <div className='flex flex-col gap-1 items-center mb-2'>
              <p className='text-black font-semibold text-3xl '>Binary Tree Visualizer</p>
              <p className='text-black text-sm text-center max-w-80 mb-2'>
                Enter your tree as an array to see it visualized.
              </p>

              <div className=' relative flex flex-row items-center'>
                <input
                  className="w-70 lg:w-80 text-[#2c2c2c] border-black border-2 p-2.5 
                  focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  placeholder='Type here : [1,7,null,8,...]'
                  value={inputText}
                  onChange={(e) => { setInputText(e.target.value)}}
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
                <RadioGroup options={orderOptions} value={traversalType} onChange={setTraversalType} name="traversaltypechange" tabOption={tabOption} setTabOption={setTabOption} />
                <button
                  className='button-home button-red'
                  onClick={() => { setInputText(""); setRoot(null) }}>Reset
                </button>
              </div>
              <button
                className='button-home button-blue'
                onClick={() => { setSearchTree(!searchTree) }}>{!searchTree ? "Turn into binary search tree" : "Turn into simple binary tree"}</button>
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