import axios from 'axios'

export default function searchJobsGet(callBack, value, isCash, error) {
    const url = `https://maplestory.io/api/gms/213/item/list?jobFilter=${value}&cashFilter=${isCash}`
    axios.get(url)
        .then(res => {
            callBack(res.data)
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