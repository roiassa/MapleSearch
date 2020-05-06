import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faHome } from '@fortawesome/free-solid-svg-icons'

function Magician() {
    return (
        <Link to="/magician" ><div className="link-div">
                <FontAwesomeIcon icon={faUserSecret} className="icon-user" />
                <span className="nav-link">Magician</span>
            </div>
        </Link>
    )
}

export default Magician
