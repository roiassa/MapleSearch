import axios from 'axios'

export default function jobGet(callBack, error) {
    const url = '/api/jobs'
    axios.get(url)
        .then(res => {
            callBack(res.data)

        })
        .catch(err => {
            if (err.reponse.status === 404) {
                console.log(err)
            }
        })
}