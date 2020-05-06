import React from 'react'
import MagicianImg from '../../assets/img-src/388px-Magician_Female.png'


function MagicianPage() {
    return (
        <React.Fragment>
        <h1 className="job-title">Magician</h1>
        <img src={MagicianImg} alt="Magician"></img>
        <div className="job-overview">
            <p>The Magician may look fragile, but this powerful magic-user can obliterate enemies from afar with devastating spells.
                 With a large amount of mana, the Magician can cast elemental or supportive skills from a distance while characters stronger in melee combat engage monsters up close.
                  The Magician is perfect for Party Quests, Boss Fights, hunting and other activities that require elemental power.
                   The Magician calls the town of Ellinia, located in the eastern forest of Victoria Island, home.
                    When Explorer-type Magicians reach a certain level, they can choose between three different specializations: Fire and Poison Arch Mage,
                     Lightning Arch Mage or Bishop.</p>
        </div>
    </React.Fragment>
    )
}

export default MagicianPage
