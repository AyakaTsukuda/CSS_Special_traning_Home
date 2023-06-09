import React from 'react'

export default function Container({children, addClassName="", addStyle={}}) {

    const defaultStyle = {marginTop:"60px", padding:"30px 200px"}
    const generateStyle = {...defaultStyle, ...addStyle}

    return (
        <div className={addClassName} style={generateStyle}>
            {children}
        </div>
    )
}
