import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import dropDownJobs from '../../../../helpers/dropDownJobs'
import searchJobsGet from '../../../../helpers/apicalls/searchJobsApi'

function DropDown(props) {

    const handleSelect = (value) => {
        searchJobsGet(props.setJobItems, value, props.isCash)
        props.setIsLoading(!props.isLoading)
        props.setActivePerJobSearch(true)
        props.setCurrentPage(1)
        props.setSearch('')
    }


    return (
        <React.Fragment>
            <DropdownButton title='Choose a job' size='10vw' onSelect={(eventKey) => { handleSelect(eventKey) }}>
                {dropDownJobs.map((job, index) => {
                    return <Dropdown.Item eventKey={job.name} key={index}>{job.name}</Dropdown.Item>
                })}
            </DropdownButton>{' '}
        </React.Fragment>
    )
}

export default DropDown
