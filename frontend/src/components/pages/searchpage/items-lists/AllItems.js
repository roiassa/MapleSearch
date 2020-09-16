import React, { useEffect, useCallback } from 'react'
import getAllItems from '../../../../helpers/apicalls/allItemsApi'


function AllItems(props) {

    //wrapping the functions in react's useCallback hook to avoid useEffect dependency warnings:
    const setAllItems = useCallback(() => {
        getAllItems(props.isCash, props.setCurrentItems, props.currentPage, props.setPageNumbers)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isCash, props.setCurrentItems, props.setPageNumbers, props.currentPage])

    useEffect(() => {
        if(!props.currentItems) {
            props.setIsLoading(true)
        } else {
            props.setIsLoading(false)
        }
        setAllItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setAllItems])

    return (
        <React.Fragment>
            {props.currentItems.map((item, index) => {
                return <div className='item' key={index}>
                    <div className="item-img-div">
                        <img src={item.image} alt="):"></img>
                    </div>
                    <div className='all-item-details'>
                        <div className='item-name'>
                            <span>{item.name}</span>
                        </div>
                        <div className='item-details'>
                            <p>Required Jobs: {item.requiredJobs}</p>
                            <p>Required Level: {item.requiredLevel}</p>
                            <p>Category: {item.category}</p>
                        </div>
                    </div>
                </div>
            })
            }
        </React.Fragment>
    )
}

export default AllItems