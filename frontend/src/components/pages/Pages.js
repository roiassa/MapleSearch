import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HomePage from './HomePage'
// import corners from '../../assets/img-src/kisspng-borders-and-frames-gold-clip-art-gold-corner-5ab9582ea29f60.5564116915220961746661.png'
import { BrowserRouter as Router, Route, } from 'react-router-dom'


function Pages() {

    const [jobPages, setJobPages] = useState([])

    useEffect(() => {
        const url = '/api/jobs'
        axios.get(url)
        .then(res => {
            setJobPages(res.data)
            
        })
        .catch(err => {
            if(err.reponse.status === 404) {
                console.log(err)
            }
        })
    }, [])

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
                {jobPages.map((page, index) => {
                    return <Route exact path={page.path} key={index}>
                        <React.Fragment>
                            <h1 className="title">{page.title}</h1>
                            <img src={page.image} alt='):'></img>
                            <p className="overview">{page.overview}</p>
                        </React.Fragment>
                    </Route>
                })}
            </div>
        </div>
    )
}

export default Pages