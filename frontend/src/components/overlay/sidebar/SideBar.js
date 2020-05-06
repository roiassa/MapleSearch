import React from 'react';
import Warrior from './mapleJobs/Warrior'
import Magician from './mapleJobs/Magician'


function SideBar() {
    return (
        <nav className="side-bar">
           <Warrior />
            <Magician />
        </nav>
    )
}


export default SideBar;