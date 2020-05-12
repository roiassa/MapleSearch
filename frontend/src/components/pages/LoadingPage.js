import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function LoadingPage(props) {
    if (props.isLoading) {
        setTimeout(() => {
            props.setIsLoading(false)
        }, 2000)
    }
    return (
        <React.Fragment>
            {props.isLoading ? <div className="loading-page">
                <Spinner animation="grow" variant="primary" />
            </div> : null}
        </React.Fragment>
    )
}

export default LoadingPage
