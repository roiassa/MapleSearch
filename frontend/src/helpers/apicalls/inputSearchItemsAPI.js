import axios from 'axios'

export default function inputSearchItems(searchParam, isCash, currentPage, callBack, pageNumber) {
    const url =`/api/items/search/${searchParam}/${isCash}/page=${currentPage}`
    axios.get(url)
        .then((res => {
            if(!res.data.filteredItems) {
                return;
            }
            callBack(res.data.filteredItems)
            const allItemNumber = []
            if(!isCash) {
                for(let i=0; i < res.data.filteredItemsNumberCashFalse / 10; i++) {
                    allItemNumber.push(i)
                }
            } else {
                for(let i=0; i < res.data.filteredItemsNumberCashTrue / 10; i++) {
                    allItemNumber.push(i)
                }
            }
            pageNumber(allItemNumber)
        }
        ))
        .catch(err => {
            if (err.respone === undefined) {
                alert("Api is down")
            }
            else if (err.reponse.status === 404) {
                console.log(err)
            }
        })
} 