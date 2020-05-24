import React, { useEffect, useCallback } from 'react'
import getAllItems from '../../../../helpers/apicalls/allItemsApi'
import getCurrentPageItems from '../../../../helpers/getCurrentPageItems'


function AllItems(props) {

    //wrapping the functions in react's useCallback hook to avoid useEffect dependency warnings:
    const getAllItemsMemo = useCallback(() => {
        getAllItems(props.isCash, props.setAllItems)
    }, [props.isCash, props.setAllItems])

    const getCurrentPageItemsMemo = useCallback(() => {
        getCurrentPageItems(props.currentPage, props.itemsPerPage, props.allItems, props.setCurrentItems)
    }, [props.currentPage, props.itemsPerPage, props.allItems, props.setCurrentItems])

    useEffect(() => {
        getAllItemsMemo()
    }, [getAllItemsMemo])

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
            })
            }
        </React.Fragment>
    )
}

export default AllItems