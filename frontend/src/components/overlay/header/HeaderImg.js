import React from 'react';
import mushroom from '../../../assets/img-src/kisspng-maplestory-jungle-adventures-super-story-video-ga-5af6c8acb28589.9486227815261226687312.png'
import mapleTree from '../../../assets/img-src/kisspng-maplestory-skill-computer-software-game-quest-censored-png-5b56ad53211b78.1610534215324071231356.png'
import Logo from '../../../assets/img-src/logo_transparent.png'
import { Link } from 'react-router-dom'

function HeaderImg() {
    return (
        <Link to="/" >
            <div className="logo-container">
                {/* <img src={mushroom} alt="):"></img> */}
                {/* <h1 className='title'>@MapleSearch</h1> */}
                {/* <img src={mapleTree} alt="):"></img> */}
                <img src={Logo} alt="Logo"></img>
            </div>
        </Link>
    )
}


export default HeaderImg;