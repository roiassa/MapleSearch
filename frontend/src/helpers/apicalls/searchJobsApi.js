import axios from 'axios'

export default function searchJobsGet(callBack, value, isCash) {
    const url = `/api/items/${value}/${isCash}`
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