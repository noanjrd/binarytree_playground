// import { useState } from 'react'
import '../../style/App.css'
import '../../style/Explainations.css'
import { BasicExplainations } from './Base'
import { PreorderExplainations } from './Preorder'
import { PostorderExplainations } from './Postorder'


interface ExplainationsGroupProps {
    explainationFor: string,
    setInputText: (value: string) => void
    setExplainationFor: (value: string) => void
}

export function Explainations({ explainationFor, setInputText, setExplainationFor}: ExplainationsGroupProps) {

    return (
        <>
            <div>
                {explainationFor === "base" && (
                    <BasicExplainations setExplainationFor={setExplainationFor} />
                )}
                {explainationFor === "Preorder" && (
                    <PreorderExplainations setInputText={setInputText}  />
                )}
                {explainationFor === "Postorder" && (
                    <PostorderExplainations setInputText={setInputText} />
                )}

            </div>
        </>
    )
}