import React from 'react';
import Logo from '../../../assets/img-src/logo_transparent.png'
import { Link } from 'react-router-dom'

function HeaderImg() {
    return (
        <Link to="/" >
            <div className="logo-container">
                <img src={Logo} alt="Logo"></img>
            </div>
        </Link>
    )
}


export default HeaderImg;