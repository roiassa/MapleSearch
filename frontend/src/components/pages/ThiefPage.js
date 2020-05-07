import React from 'react'
import ThiefImg from '../../assets/img-src/Artwork_Thief_2M.png'

function ThiefPage() {
    return (
        <React.Fragment>
            <h1 className="title">Thief</h1>
            <img src={ThiefImg} alt="Thief"></img>
            <div className="overview">
                <p>Thieves are born sneaks. They're skilled at dodging attacks and are particularly fond of stealth,
                     using their abilities to evade enemies or hide from them entirely. While out of sight, a Thief can slip past baddies unnoticed,
                      or get into position for a sneak attack. Armed with daggers, claws and throwing stars,
                       a Thief can unleash a lightning-fast flurry of blows that will take monsters by surprise.
                        When Explorer-type Thieves reach a certain level, they can choose between two different specializations: Night Lord or Shadower.</p>
            </div>
        </React.Fragment>
    )
}

export default ThiefPage
