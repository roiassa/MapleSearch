import React, { useState, useEffect } from 'react'
import HomePage from './HomePage'
import jobGet from './../../helpers/apicalls/jobsApi'
import JobPages from './JobPages'
import SearchPage from './searchpage/SearchPage'
import { BrowserRouter as Router, Route, } from 'react-router-dom'


function Pages() {

    const [jobPagesList, setJobPagesList] = useState([])

    useEffect(() => {
        jobGet(setJobPagesList)
    }, [])

    return (
        <div className="wrapper">
            <div className="pages-window">
                <Route exact path="/" component={HomePage} />
                <JobPages
                    jobPagesList={jobPagesList}
                />
                <Route exact path="/search" component={SearchPage} />
            </div>
        </div>
    )
}

export default Pages