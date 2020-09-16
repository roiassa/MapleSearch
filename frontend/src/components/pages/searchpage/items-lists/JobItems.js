import React, { useEffect, useCallback } from 'react'
import searchJobsItemsGet from '../../../../helpers/apicalls/searchJobsItemsApi'


function JobItems(props) {

    const setJobItems = useCallback(() => {
        searchJobsItemsGet(props.setCurrentItems, props.currentJob, props.isCash, props.currentPage, props.setPageNumbers)
    }, [props.currentJob, props.currentPage, props.isCash, props.setCurrentItems, props.setPageNumbers])
    
    useEffect(() => {
        setJobItems()
    }, [setJobItems])
    
    return (
        <React.Fragment>
            {
            props.currentItems.map((item, index) => {
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

export default JobItems