import React from 'react'


function BackToAllItemsSearch(props) {

    const handleClick = () => {
        props.setActivePerJobSearch(false)
    }

    return (
        <div className="back-btn-div">
            <button onClick={handleClick}>Back to all items</button>
        </div>
    )
}

export default BackToAllItemsSearch
