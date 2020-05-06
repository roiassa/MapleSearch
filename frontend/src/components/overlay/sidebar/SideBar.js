import React from 'react';
import Warrior from './mapleJobs/Warrior'
import Magician from './mapleJobs/Magician'
import Thief from './mapleJobs/Thief'
import Bowman from './mapleJobs/Bowman'
import Pirate from './mapleJobs/Pirate'


function SideBar() {
    return (
        <nav className="side-bar">
            <Warrior />
            <Magician />
            <Thief />
            <Bowman />
            <Pirate />
        </nav>
    )
}


export default SideBar;