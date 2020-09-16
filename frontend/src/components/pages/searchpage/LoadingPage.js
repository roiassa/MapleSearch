import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import pinkBean from '../../../assets/img-src/Pink Bean.png'

function LoadingPage(props) {
    return (
        <React.Fragment>
            <div className="loading-page">
                <span>Loading...</span>
                <Spinner animation="grow" variant="primary" />
                <img src={pinkBean} alt="):"></img>
            </div>
        </React.Fragment>
    )
}

export default LoadingPage
