import '../../../styles/App.css'
import '../../../styles/Explanations.css'
import { useEffect, useState } from 'react'
import { PreorderExplanations } from './Preorder'
import { InorderExplanations } from './Inorder'
import { PostorderExplanations } from './Postorder'
import ArrowIcon from "../../../assets/arrow.svg"

interface ExplanationsGroupProps {
    setInputText: (value: string) => void
    setOrderType: (val: string) => void
    setExplanationFor: (val: string) => void
    explanationFor: string
}

export function Traversals({ setInputText, setOrderType, setExplanationFor, explanationFor }: ExplanationsGroupProps) {
    const [selectedOrder, setSelectedOrder] = useState<string>('Preorder')
    const [visibleArrow, setVisibleArrow] = useState(true)
    useEffect(() => {
        if (explanationFor !== "Traversal")
        {
            setSelectedOrder(explanationFor)
            setExplanationFor("Traversal")
        }
    }, [explanationFor])

    return (
        <div
            onScroll={() => setVisibleArrow(false)}
            className='card relative px-5 py-5 overflow-y-auto scrollbar-none max-h-[66vh] flex flex-col overflow-x-hidden items-start min-w-140'
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none"
            }}>
            <div
                className={`animate-bounce absolute rotate-180 w-full flex justify-center bottom-4 -ml-5 
                    transition-opacity duration-300 ${visibleArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <img src={ArrowIcon} width={20} height={20} />
            </div>
            {/* Selector inside card */}
            <div className='flex gap-2 justify-center w-full mb-4'>
                <button
                    onClick={() => setSelectedOrder('Preorder')}
                    className={`px-4 py-2 rounded-full border-2 border-black font-semibold transition-all text-black
                        ${selectedOrder === 'Preorder'
                            ? 'bg-[#b9adff] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] '}`}
                >
                    Preorder
                </button>
                <button
                    onClick={() => setSelectedOrder('Inorder')}
                    className={`px-4 py-2 rounded-full border-2 border-black font-semibold transition-all text-black
                        ${selectedOrder === 'Inorder'
                            ? 'bg-[#7dd3fc] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] '
                            : 'bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] '}`}
                >
                    Inorder
                </button>
                <button
                    onClick={() => setSelectedOrder('Postorder')}
                    className={`px-4 py-2 rounded-full border-2 border-black font-semibold transition-all text-black
                        ${selectedOrder === 'Postorder'
                            ? 'bg-[#ffd268] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] '}`}
                >
                    Postorder
                </button>
            </div>

            {/* Content */}
            <div className='w-full'>
                {selectedOrder === 'Preorder' && <PreorderExplanations setInputText={setInputText} setOrderType={setOrderType} />}
                {selectedOrder === 'Inorder' && <InorderExplanations />}
                {selectedOrder === 'Postorder' && <PostorderExplanations setInputText={setInputText} setOrderType={setOrderType} />}
            </div>
        </div>
    )
}