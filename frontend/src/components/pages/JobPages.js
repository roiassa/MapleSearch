import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function JobPages(props) {
    return (
        <React.Fragment>
            {props.jobPagesList.map((page, index) => {
                return <Route exact path={page.path} key={index}>
                    <React.Fragment>
                        <div className="go-to-search-wrapper">
                            <Link to='/search' className='go-to-search-page'>Go to search page</Link>
                        </div>
                        <h1 className="title">{page.title}</h1>
                        <img src={page.image} alt='):' className="jobImg"></img>
                        <div className="overview">
                            <p >{page.overview}</p>
                        </div>
                    </React.Fragment>
                </Route>
            })}
        </React.Fragment>
    )
}

export default JobPages
