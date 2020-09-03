import axios from 'axios'

export default function getAllItems(isCash, callBack, currentPage, pageNumber) {
    axios.get(`/api/items/${isCash}/page=${currentPage}`)
        .then((res => {
            callBack(res.data.items)
            const allItemNumber = []
            if(!isCash) {
                for(let i=0; i < res.data.itemNumberCashFalse / 10; i++) {
                    allItemNumber.push(i)
                }
            } else {
                for(let i=0; i < res.data.itemNumberCashTrue / 10; i++) {
                    allItemNumber.push(i)
                }
            }
            pageNumber(allItemNumber)
        }
        ))
        .catch(err => {
            if (err.reponse.status === 404) {
                console.log(err)
            }
        })
} 