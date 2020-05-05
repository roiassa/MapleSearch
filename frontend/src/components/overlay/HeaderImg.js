import React from 'react';
import mushroom from './img-src/kisspng-maplestory-jungle-adventures-super-story-video-ga-5af6c8acb28589.9486227815261226687312.png'
import mapleTree from './img-src/kisspng-maplestory-skill-computer-software-game-quest-censored-png-5b56ad53211b78.1610534215324071231356.png'

function HeaderImg() {
    return (
        <div className="logo-container">
            <img src={mushroom} alt="):"></img>
            <h1 className='title'>@MapleSearch</h1>
            <img src={mapleTree} alt="):"></img>
        </div>
    )
}


export default HeaderImg;