import React from 'react'
import WarriorImg from '../../assets/img-src/kisspng-maplestory-youtube-warrior-character-video-game-5afd8cad425968.3921387515265660612718.png'

function WarriorPage() {
    return (
        <React.Fragment>
            <h1 className="job-title">Warrior</h1>
            <img src={WarriorImg}></img>
            <div className="job-overview">
                <p>The Warrior is a solid, well-rounded character perfect for players new to MapleStory.
                This character excels at defense, with large amounts of health and access to powerful suits of armor.
                These strengths help keep the Warrior protected when engaged in close-quarters combat against hordes of monsters.
                Warriors can wield the widest array of weapons in the game, including everything from swords and axes to spears and blunt weapons,
                as well as shields, and can specialize in their favorites as they level up.
                Warriors hail from the town of Perion, located in the northern highlands of Victoria Island. When Explorer-type Warriors reach a certain level,
                they can choose between three different specializations: Fighter, Page or Spearman.
                       They can continue to level and grow, to ultimately become a Hero, Paladin or Dark Knight.</p>
            </div>
        </React.Fragment>
    )
}

export default WarriorPage
