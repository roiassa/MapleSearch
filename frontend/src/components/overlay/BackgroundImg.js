import React from 'react'
// import clouds from './img-src/5a1bc3823ef1d9.8939779715117689622578.png'
import clouds from './img-src/ananim.webp'

function backgroundImg() {
    return (
        <React.Fragment>
            <div className="background-container rotate" style={{ backgroundImage: `url(${clouds})` }}>
            </div>
            <div className="background-container" style={{ backgroundImage: `url(${clouds})` }}>
            </div>
        </React.Fragment>
    )
}

export default backgroundImg;