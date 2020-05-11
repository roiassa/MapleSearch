import React, { useState } from 'react'

function IsCashButton(props) {

    const [btnColor, setBtnColor] = useState(false)

    const handleClick = () => {
        props.setIsCash(!props.isCash)
        setBtnColor(!btnColor)
    }

    let colorOfButton = btnColor ? "yes-cash" : "no-cash"

    return (
        <div className="cash-btn-div">
            <button className={colorOfButton} onClick={handleClick}>Cash Items</button>
        </div>
    )
}

export default IsCashButton
