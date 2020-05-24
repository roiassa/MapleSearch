export default function getCurrentPageItems(currentPage, itemsPerPage, callBack, setCurrItemsArrState, currItemsArrState ) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currItemsArr = callBack.slice(indexOfFirstItem, indexOfLastItem)
    setCurrItemsArrState(currItemsArr)
}