import React from 'react'

export default function Title({text="Title"}) {

    return (
        <div className="mb-2.5 text-lg font-bold" style={{fontFamily:"Meiryo", color:"#333333"}}>
            {text}
        </div>
    )
}
