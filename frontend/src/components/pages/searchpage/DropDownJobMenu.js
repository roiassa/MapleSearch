import React, { useEffect } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import dropDownJobs from '../../../helpers/dropDownJobs'
import searchJobsApi from '../../../helpers/apicalls/searchJobsApi'

function DropDown(props) {

    const handleSelect = (value) => {
        searchJobsApi(props.setItems, value, props.isCash)
        props.setIsLoading(!props.isLoading)
    }

    return (
        <React.Fragment>
            <DropdownButton title='Choose a job' onSelect={(eventKey) => { handleSelect(eventKey) }}>
                {dropDownJobs.map((job, index) => {
                    return <Dropdown.Item eventKey={job.value} key={index}>{job.name}</Dropdown.Item>
                })}
            </DropdownButton>{' '}

        </React.Fragment>
    )
}

export default DropDown
