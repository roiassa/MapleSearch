import axios from 'axios'

export default function getAllItems(isCash, callBack) {
    axios.get(`/api/items/${isCash}`)
        .then((res =>
            callBack(res.data)
        ))
        .catch(err => {
            if (err.reponse.status === 404) {
                console.log(err)
            }
        })
} 