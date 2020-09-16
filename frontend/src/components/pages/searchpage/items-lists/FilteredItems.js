import React from 'react'

function FilteredItems(props) {
    return (
        <React.Fragment>
            {!props.currentItems.length ? <div className="no-items-found">
                No Items Found
                </div> : 
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
            })}
        </React.Fragment>
    )
}

export default FilteredItems