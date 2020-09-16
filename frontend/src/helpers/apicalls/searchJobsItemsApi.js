import axios from 'axios'

export default function searchJobsItemsGet(callBack, value, isCash, currentPage, pageNumber) {
    const url = `/api/items/${value}/${isCash}/page=${currentPage}`
    axios.get(url)
        .then(res => {
            callBack(res.data.jobItems)
            const allItemNumber = []
            if(!isCash) {
                for(let i=0; i < res.data.jobItemNumberCashFalse / 10; i++) {
                    allItemNumber.push(i)
                }
            } else {
                for(let i=0; i < res.data.jobItemNumberCashTrue / 10; i++) {
                    allItemNumber.push(i)
                }
            }
            pageNumber(allItemNumber)
        })
        
        .catch(err => {
            console.log(err)
            if (err.respone === undefined) {
                alert("Api is down")
            }
            else if (err.reponse.status === 404) {
                console.log(err)
            }
        })
}