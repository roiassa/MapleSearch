import React from 'react'
import BowmanImg from '../../assets/img-src/402px-Artwork_Bowman_1M.png'

function BowmanPage() {
    return (
             <React.Fragment>
            <h1 className="job-title">Bowman</h1>
            <img src={BowmanImg} alt="Bowman"></img>
            <div className="job-overview">
                <p>Bowmen are nimble, long-range snipers. They have a variety of skills to help attack, evade danger,
                     buff their damage, and launch arrows at groups of monsters. Bowmen can attack an enemy horde with arrow barrages,
                      but are strongest attacking single targets from afar, as their long range is balanced by modest HP.
                       Bowmen call the bustling town of Henesys, located in the southern part of Victoria Island, their home.
                        When Explorer-type Bowmen reach a certain level, they can choose between two different specializations: Bowmaster or Marksman.</p>
            </div>
        </React.Fragment>
    )
}

export default BowmanPage
