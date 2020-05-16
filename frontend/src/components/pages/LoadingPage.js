import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import pinkBean from '../../assets/img-src/Pink Bean.png'

function LoadingPage(props) {
    if (props.isLoading) {
        setTimeout(() => {
            props.setIsLoading(false)
        }, 3000)
    }
    return (
        <React.Fragment>
            {props.isLoading ? <div className="loading-page">
                <span>Loading...</span>
                <Spinner animation="grow" variant="primary" />
                <img src={pinkBean} alt="):"></img>
            </div> : null}
        </React.Fragment>
    )
}

export default LoadingPage
