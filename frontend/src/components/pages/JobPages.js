import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

function JobPages(props) {
    return (
        <React.Fragment>
            {props.jobPagesList.map((page, index) => {
                return <Route exact path={page.path} key={index}>
                    <React.Fragment>
                        <h1 className="title">{page.title}</h1>
                        <img src={page.image} alt='):'></img>
                        <p className="overview">{page.overview}</p>
                    </React.Fragment>
                </Route>
            })}
        </React.Fragment>
    )
}

export default JobPages
