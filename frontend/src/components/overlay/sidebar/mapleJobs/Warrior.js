import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faHome } from '@fortawesome/free-solid-svg-icons'

function Warrior() {
    return (
        <Link to="/warrior" ><div className="link-div">
            <FontAwesomeIcon icon={faHome} className="icon-home" />
            <span className="nav-link">Warrior</span>
        </div>
        </Link>
    )
}

export default Warrior
