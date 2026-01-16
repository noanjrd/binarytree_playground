import { useEffect, useState } from 'react'
import './App.css'
import MakeBinaryTree from "../utils/Binarytrees.ts"
import DisplayBinaryTree from "../utils/DisplayBinaryTree.tsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [liste, setListe] = useState<number[]>([])
  const root = MakeBinaryTree(liste)
  const [inputtext, setInputtext] = useState("")
  // const options = ["default"]

  useEffect(() => {
    modifyliste(inputtext)
  }, [inputtext])

  const modifyliste = ((text: string) => {
    if (text.length === 0)
    {
      setListe([])
      return 
    }
    const modtext = text.replace(/\[/g, "").replace(/\]/g, "")
    console.log(modtext)

    for (let i = 0; i < modtext.length; i++) {
      if (isNaN(Number(modtext[i])) && modtext[i] != ",") {
        console.error("Only number")
        toast.error("This input only takes numbers")
        return
      }

    }
    const NumberArray = modtext.split(',').map(Number)
    setListe(NumberArray)
  })
  return (
    <>
      <div className="">

        <div className='flex flex-row gap-2'>
          <input
            className="w-80 h-10 bg-white text-black rounded-sm mb-5 px-2 items-center justify-center"
            placeholder='Enter your tree'
            value={inputtext}
            onChange={(e) => setInputtext(e.target.value)}
          />
          <button
            className='h-10 w-20 rounded-sm text-center bg-[#82251e] cursor-pointer font-sans font-medium hover:bg-[#82251e]/80'
            onClick={() => {setInputtext("")}}>reset</button>
        </div>
        <DisplayBinaryTree root={root} />
        <ToastContainer />
        {/* <p className='text-red-900 text-xl'>COucou</p> */}
      </div>
    </>
  )
}

export default App
