import { useState } from 'react'
import '../../style/App.css'
import '../../style/Explainations.css'
import { BasicExplainations } from './Base'
import { PreorderExplainations } from './Preorder'


interface ExplainationsGroupProps {
    explainationFor: string,
    setInputText: (value: string) => void
}

export function Explainations({ explainationFor, setInputText}: ExplainationsGroupProps) {

    const [visibleArrow, setVisibleArrow] = useState(true)
    return (
        <>
            <div onScroll={() => setVisibleArrow(false)} className='card  px-5 py-5  overflow-y-auto  scrollbar-none max-h-[66vh]'
                style={{
                    scrollbarWidth: "none",   // Firefox
                    msOverflowStyle: "none"   // IE 10+
                }}>
                {explainationFor === "base" && (
                    <BasicExplainations />
                )}
                {explainationFor === "preorder" && (
                    <PreorderExplainations setInputText={setInputText} visibleArrow={visibleArrow} />
                )}

            </div>
        </>
    )
}