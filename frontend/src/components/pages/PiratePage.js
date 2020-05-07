import React from 'react'
import PirateImg from '../../assets/img-src/386px-Pirate_Female.png'

function PiratePage() {
    return (
        <React.Fragment>
            <h1 className="title">Pirate</h1>
            <img src={PirateImg} alt="Pirate"></img>
            <div className="overview">
                <p>Ahoy, mateys! If it's adventure ye be seeking, then the Pirate is the class for you!
                     These swashbuckling rogues come equipped with guns and brass knuckles, and can specialize as either a Buccaneer or Corsair depending on their preference.
                      Buccaneers can channel their inner energy to deliver powerful strikes. Corsairs are masters of firearms and offer a variety of rapid-fire,
                       high caliber attacks.</p>
            </div>
        </React.Fragment>
    )
}

export default PiratePage
