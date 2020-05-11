import React, { useState, useEffect } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'
import dropDownJobs from '../../../helpers/dropDownJobs'

function SearchPage() {

    const [items, setItems] = useState([])

    const handleSelect = (value) => {
        axios.get(`https://maplestory.io/api/gms/213/item/list?jobFilter=${value}`)
            .then(res => {
                console.log(res.data)
                setItems(res.data)
            })
    }

    return (
        <React.Fragment>
            <>
                <>
                    <DropdownButton title='Choose a job' onSelect={(eventKey) => { handleSelect(eventKey) }}>
                        {dropDownJobs.map((job, index) => {
                            return <Dropdown.Item eventKey={job.value} key={index}>{job.name}</Dropdown.Item>
                        })}

                    </DropdownButton>{' '}
                </>
            </>
            <div>
                {items.map((item, index) => {
                    return <React.Fragment key={index}>
                        <h1 >Item: {item.name}</h1>
                        <h1>Required Jobs: {item.requiredJobs}</h1>
                        <h1>Required Level: {item.requiredLevel}</h1>
                        <h1>Category: {item.typeInfo.subCategory}</h1>
                        <img src={`https://maplestory.io/api/gms/213/item/${item.id}/icon`} style={{height: '50px'}}></img>
                    </React.Fragment>
                })
                } 
            </div>
        </React.Fragment>
    )
}

export default SearchPage