import React, {useEffect, useCallback} from 'react'
import getCurrentPageItems from '../../../../helpers/getCurrentPageItems'


function FilteredItems(props) {

    const getCurrentPageItemsMemo = useCallback(() => {
        getCurrentPageItems(props.currentPage, props.itemsPerPage, props.filteredItems, props.setCurrentItems)
    }, [props.currentPage, props.itemsPerPage, props.filteredItems, props.setCurrentItems])

    useEffect(() => {
        getCurrentPageItemsMemo()
    }, [getCurrentPageItemsMemo])

    return (
        <React.Fragment>
            {props.currentItems.map((item, index) => {
                return <div className='item' key={index}>
                    <div className='item-name'>
                        <span>{item.name}</span>
                    </div>
                    <div className='item-details'>
                        <p>Required Jobs: {item.requiredJobs}</p>
                        <p>Required Level: {item.requiredLevel}</p>
                        <p>Category: {item.category}</p>
                    </div>
                    <div className="item-img">
                        <img src={item.image} alt="):"></img>
                    </div>
                </div>
            })}
        </React.Fragment>
    )
}

export default FilteredItems