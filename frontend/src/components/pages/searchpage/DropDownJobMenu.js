import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import dropDownJobs from '../../../helpers/dropDownJobs'
import axios from 'axios'

function DropDown(props) {

    const handleSelect = (value) => {
        axios.get(`https://maplestory.io/api/gms/213/item/list?jobFilter=${value}`)
            .then(res => {
                console.log(res.data)
                props.setItems(res.data)
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
        </React.Fragment>
    )
}

export default DropDown
