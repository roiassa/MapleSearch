import React from 'react'

function FilteredItems(props) {

    //Get current items
    const indexOfLastItem = props.currentPage * props.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - props.itemsPerPage
    const currentFilteredItems = props.filteredItems.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <React.Fragment>
            {currentFilteredItems.map((item, index) => {
                return <div className='item' key={index}>
                    <div className='item-name'>
                        <span>{item.name}</span>
                    </div>
                    <div className='item-details'>
                        <p>Required Jobs: {item.requiredJobs}</p>
                        <p>Required Level: {item.requiredLevel}</p>
                        <p>Category: {item.typeInfo.subCategory}</p>
                    </div>
                    <div className="item-img">
                        <img src={`https://maplestory.io/api/gms/213/item/${item.id}/icon`} alt="):"></img>
                    </div>
                </div>
            })}
        </React.Fragment>
    )
}

export default FilteredItems