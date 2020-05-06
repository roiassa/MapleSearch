import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faHome } from '@fortawesome/free-solid-svg-icons'

function Pirate() {
    return (
        <Link to="/pirate" ><div className="link-div">
                <FontAwesomeIcon icon={faUserSecret} className="icon-user" />
                <span className="nav-link">Pirate</span>
            </div>
        </Link>
    )
}

export default Pirate
