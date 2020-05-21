const Item = require('../models/itemsSchema');
const axios = require('axios');

const jobIds = [0, 1, 2, 8, 4, 16]

jobIds.forEach(jobId => {
    jobDataToDb(jobId)
})

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