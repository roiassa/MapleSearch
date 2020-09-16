import React from 'react'


function BackToAllItemsSearch(props) {

    const handleClick = () => {
        props.setActivePerJobSearch(false)
        props.setInputActiveSearch(false)
        props.setCurrentPage(0)
        props.setSearch('')
    }

    return (
        <div className="back-btn-div">
            <button onClick={handleClick}>Back to all items</button>
        </div>
    )
}

export default BackToAllItemsSearch
