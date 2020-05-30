const Item = require('../models/itemsSchema');
const Job = require('../models/jobsSchema');
const axios = require('axios');

function jobs() {
    const jobs = [{
        path: '/warrior',
        title: 'Warrior',
        image: 'uploads/2020-05-09T14-26-04.793Zkisspng-maplestory-youtube-warrior-character-video-game-5afd8cad425968.3921387515265660612718.png',
        overview: `The Warrior is a solid, well-rounded character perfect for players new to MapleStory.
        This character excels at defense, with large amounts of health and access to powerful suits of armor.
        These strengths help keep the Warrior protected when engaged in close-quarters combat against hordes of monsters.
        Warriors can wield the widest array of weapons in the game, including everything from swords and axes to spears and blunt weapons,
        as well as shields, and can specialize in their favorites as they level up.
        Warriors hail from the town of Perion, located in the northern highlands of Victoria Island. When Explorer-type Warriors reach a certain level,
        they can choose between three different specializations: Fighter, Page or Spearman.
        They can continue to level and grow, to ultimately become a Hero, Paladin or Dark Knight.`
    },
    {
        path: '/magician',
        title: 'Magician',
        image: 'uploads/2020-05-09T14-44-45.524Z388px-Magician_Female.png',
        overview: `The Magician may look fragile, but this powerful magic-user can obliterate enemies from afar with devastating spells.
        With a large amount of mana, the Magician can cast elemental or supportive skills from a distance while characters stronger in melee combat engage monsters up close.
        The Magician is perfect for Party Quests, Boss Fights, hunting and other activities that require elemental power.
        The Magician calls the town of Ellinia, located in the eastern forest of Victoria Island, home.
        When Explorer-type Magicians reach a certain level, they can choose between three different specializations: Fire and Poison Arch Mage,
        Lightning Arch Mage or Bishop.`
    },
    {
        path: '/thief',
        title: 'Thief',
        image: 'uploads/2020-05-09T14-58-28.178ZArtwork_Thief_2M.png',
        overview: `Thieves are born sneaks. They're skilled at dodging attacks and are particularly fond of stealth,
        using their abilities to evade enemies or hide from them entirely. While out of sight,
        a Thief can slip past baddies unnoticed,or get into position for a sneak attack. Armed with daggers,
        claws and throwing stars,a Thief can unleash a lightning-fast flurry of blows that will take monsters by surprise.
        When Explorer-type Thieves reach a certain level, they can choose between two different specializations: Night Lord or Shadower.`
    },
    {
        path: '/bowman',
        title: 'Bowman',
        image: 'uploads/2020-05-09T14-59-41.944Z402px-Artwork_Bowman_1M.png',
        overview: `Bowmen are nimble, long-range snipers. 
        They have a variety of skills to help attack, evade danger,buff their damage, and launch arrows at groups of monsters.
        Bowmen can attack an enemy horde with arrow barrages,but are strongest attacking single targets from afar,
        as their long range is balanced by modest HP.Bowmen call the bustling town of Henesys,
        located in the southern part of Victoria Island, their home.When Explorer-type Bowmen reach a certain level,
        they can choose between two different specializations: Bowmaster or Marksman.`
    },
    {
        path: '/pirate',
        title: 'Pirate',
        image: 'uploads/2020-05-09T15-00-05.377Z386px-Pirate_Female.png',
        overview: `Ahoy, mateys! If it's adventure ye be seeking, then the Pirate is the class for you!
        These swashbuckling rogues come equipped with guns and brass knuckles, 
        and can specialize as either a Buccaneer or Corsair depending on their preference.
        Buccaneers can channel their inner energy to deliver powerful strikes. Corsairs are masters of firearms and offer a variety of rapid-fire,high caliber attacks.`
    }
    ]
    Job.insertMany(jobs)
}

function getItemsData() {
    const jobIds = [0, 1, 2, 8, 4, 16]

    jobIds.forEach(jobId => {
        jobDataToDb(jobId)
    })
}

function jobDataToDb(id) {
    const items = []

    const url = `https://maplestory.io/api/gms/213/item/list?jobFilter=${id}`
    axios.get(url)
        .then(res => {
            res.data.forEach(item => {
                let obj = {
                    id: item.id,
                    name: item.name,
                    requiredJobs: item.requiredJobs[0],
                    requiredLevel: item.requiredLevel,
                    category: item.typeInfo.subCategory,
                    image: `https://maplestory.io/api/gms/213/item/${item.id}/icon`,
                    isCash: item.isCash
                }
                items.push(obj)

            })
        })
        .then(() => {
            Item.insertMany(items)
        })
        .catch(err => {
            if (err.respone === undefined) {
                alert("Api is down")
            }
            else if (err.reponse.status === 404) {
                console.log(err)
            }
        })
}



function getJobData() {
    Item.deleteMany({}, function (err) {
        if (err) return handleError(err);
    });
    Job.deleteMany({}, function (err) {
        if (err) return handleError(err);
    });
    jobs()
    getItemsData()
}


module.exports = getJobData