import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

function Bowman() {
    return (
        <Link to="/bowman" ><div className="link-div">
            <FontAwesomeIcon icon={faRandom} className="icon-user" />
            <span className="nav-link">Bowman</span>
        </div>
        </Link>
    )
}

export default Bowman