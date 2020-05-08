import React from 'react'
import HomePage from './HomePage'
// import corners from '../../assets/img-src/kisspng-borders-and-frames-gold-clip-art-gold-corner-5ab9582ea29f60.5564116915220961746661.png'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import data from './pagesData'

function Pages() {
    return (
        <div className="wrapper">
            {/* <div className="corner-div">
                    <img src={corners} className="left-top"></img>
                    <img src={corners} className="left-bottom"></img>
                    <img src={corners} className="right-top"></img>
                    <img src={corners} className="right-bottom"></img>
                </div> */}
            <div className="pages-window">
                 <Route exact path="/" component={HomePage} />
                {data.map((page, index) => {
                    return <Route exact path={page.path} key={index}>
                        <React.Fragment>
                            <h1 className="title">{page.title}</h1>
                            <img src={page.img} alt='):'></img>
                            <p className="overview">{page.overview}</p>
                        </React.Fragment>
                    </Route>
                })}
            </div>
        </div>
    )
}

export default Pages