import React from 'react'

function JobItems(props) {
    return (
        <div>
            {props.items.map((item, index) => {
                return <React.Fragment key={index}>
                    <h1 >Item: {item.name}</h1>
                    <h1>Required Jobs: {item.requiredJobs}</h1>
                    <h1>Required Level: {item.requiredLevel}</h1>
                    <h1>Category: {item.typeInfo.subCategory}</h1>
                    <img src={`https://maplestory.io/api/gms/213/item/${item.id}/icon`} style={{ height: '50px' }}></img>
                </React.Fragment>
            })
            }
        </div>
    )
}

export default JobItems
