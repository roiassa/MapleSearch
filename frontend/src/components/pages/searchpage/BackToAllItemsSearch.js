import React from 'react'


function BackToAllItemsSearch(props) {

    const handleClick = () => {
        props.setActivePerJobSearch(false)
        props.setCurrentPage(1)
    }

    return (
        <div className="back-btn-div">
            <button onClick={handleClick}>Back to all items</button>
        </div>
    )
}

export default BackToAllItemsSearch
