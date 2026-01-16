import { useEffect, useState } from 'react'
import './App.css'
import MakeBinaryTree from "../utils/Binarytrees.ts"
import DisplayBinaryTree from "../utils/DisplayBinaryTree.tsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Alert from '@mui/material/Alert';


function App() {
  const [liste, setListe] = useState([])
  const root = MakeBinaryTree(liste)


  const modifyliste = ((text: any) => {
    const modtext = text.replace(/\[/g, "").replace(/\]/g, "")
    console.log(modtext)

    for (let i = 0; i < modtext.length;i++)
    {
      if (isNaN(modtext[i]) && modtext[i] != ",")
      {
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
      <input
        className='w-80 h-10 bg-white text-black rounded-sm mb-5 px-2'
        placeholder='Enter your tree'
        onChange={(e) => modifyliste(e.target.value)}
      />
      <DisplayBinaryTree root={root} />
      <ToastContainer />
      {/* <p className='text-red-900 text-xl'>COucou</p> */}
    </>
  )
}

export default App
