import React from 'react';
import Warrior from './mapleJobs/Warrior'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faHome } from '@fortawesome/free-solid-svg-icons'


function SideBar() {
    return (
        <nav className="side-bar">
           <Warrior />
            <Link to="/about" ><div className="link-div">
                <FontAwesomeIcon icon={faUserSecret} className="icon-user" />
                <span className="nav-link">About</span>
            </div>
            </Link>
        </nav>
    )
}


export default SideBar;