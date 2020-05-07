import React from 'react';
import HeaderImg from './HeaderImg'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className="header">
            <Link to="/">
                <HeaderImg />
            </Link>
        </div>
    )
}


export default Header;