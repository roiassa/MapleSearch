import React from 'react';
import Warrior from './mapleJobs/Warrior'
import Magician from './mapleJobs/Magician'
import Thief from './mapleJobs/Thief'


function SideBar() {
    return (
        <nav className="side-bar">
            <Warrior />
            <Magician />
            <Thief />
        </nav>
    )
}


export default SideBar;