import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

function Thief() {
    return (
        <Link to="/thief" ><div className="link-div">
            <FontAwesomeIcon icon={faDollarSign} className="sidebar-icon" />
            <span className="nav-link">Thief</span>
        </div>
        </Link>
    )
}

export default Thief
