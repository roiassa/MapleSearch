import React from 'react'

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
