import React, { useState } from 'react'
import BalrogImg from '../../assets/img-src/602px-Full_Mob_Balrog.png'
import SlimeImg from '../../assets/img-src/kisspng-maplestory-2-maplestory-adventures-video-game-boss-slime-5ac4353b249ef4.18173839152280812315.png'
import { Link } from 'react-router-dom'

function HomePage() {

    const [isShown, setIsShown] = useState(false)

    return (
        <React.Fragment>
            <h1 className="title">Welcome to MapleSearch!</h1>
            <div className="overview">
                <p>MapleSearch will help you find every item that exists in the game to your needs.
                Whether it's just for a specific job, such as: Warrior, Magician, etc... Or even if you'd like to see cash items as well or not!
                You could also find other helpful things about the MapleStory world around here.
                To begin, press on that vicious Balrog beneath!
                </p>
            </div>
            <div className="balrog-div" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                {isShown ? <Link to="/"><img src={SlimeImg} alt="Slime"></img> </Link> : <img src={BalrogImg} alt="Balrog" ></img>}
            </div>
        </React.Fragment>
    )
}

export default HomePage