import React from 'react'
import WarriorPage from './WarriorPage'
import MagicianPage from './MagicianPage'
import ThiefPage from './ThiefPage'
import BowmanPage from './BowmanPage'
import PiratePage from './PiratePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Pages() {
    return (
            <div className="wrapper">
                <div className="pages-window">
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