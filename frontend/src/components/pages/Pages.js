import React from 'react'
import HomePage from './HomePage'
import WarriorPage from './WarriorPage'
import MagicianPage from './MagicianPage'
import ThiefPage from './ThiefPage'
import BowmanPage from './BowmanPage'
import PiratePage from './PiratePage'
// import corners from '../../assets/img-src/kisspng-borders-and-frames-gold-clip-art-gold-corner-5ab9582ea29f60.5564116915220961746661.png'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

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
                <Route exact path="/warrior" component={WarriorPage}></Route>
                <Route exact path="/magician" component={MagicianPage}></Route>
                <Route exact path="/thief" component={ThiefPage}></Route>
                <Route exact path="/bowman" component={BowmanPage}></Route>
                <Route exact path="/pirate" component={PiratePage}></Route>
            </div>
        </div>
    )
}

export default Pages