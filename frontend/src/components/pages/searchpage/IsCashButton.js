import React from 'react'

function isCashButton(props) {

    const handleClick = () => {
        props.setIsCash(!props.isCash)
    
    }

    return (
        <button className='cash-btn' onClick={handleClick}>Cash Items</button>
    )
}

export default isCashButton
