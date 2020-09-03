import React from 'react'
import FirstPageLogic from './FirstPageLogic'
import AllPageLogic from './AllPageLogic'
import LastPageLogic from './LastPageLogic'
import InputPageNumber from './InputPageNumber'


function Pagination(props) {

    // const pageNumbers = [];

    // if (!props.inputActiveSearch && props.activePerJobSearch) {
    //     for (let i = 1; i <= Math.ceil(props.totalJobItems / props.itemsPerPage); i++) {
    //         props.pageNumbers.push(i)
    //     }
    // } else if (props.inputActiveSearch === false && props.activePerJobSearch === false) {
    //     for (let i = 1; i <= Math.ceil(props.pageNumbers.length / props.itemsPerPage); i++) {
            
    //         newPageNumber.push(i)
    //         console.log(newPageNumber)
    //         // props.setPageNumbers(newPageNumber)
    //     }
    // } 
    // else {
    //     for (let i = 1; i <= Math.ceil(props.totalFilteredItems / props.itemsPerPage); i++) {
    //         props.pageNumbers.push(i)
    //     }
    // }

    //Change page
    const paginate = (pageNumber) => props.setCurrentPage(pageNumber)

    const handleClick = (callBack, pageNumber) => {
        callBack(pageNumber)
        props.setIsLoading(true)
        setTimeout(() => {
            props.setIsLoading(false)
        }, 1000)
    }

    return (
        <div className="pages-line">
            <span>Page: {props.currentPage + 1}</span>
            <nav>
                <ul className="pagination">
                    
                    <FirstPageLogic 
                    currentPage={props.currentPage}
                    pageNumbers={props.pageNumbers}
                    handleClick={handleClick}
                    paginate={paginate}
                    />

                    <AllPageLogic
                    isCash={props.isCash}
                    allItems={props.allItems}
                    setAllItems={props.setAllItems}
                    currentItems={props.currentItems} 
                    setPageNumbers={props.setPageNumbers}
                    currentPage={props.currentPage}
                    handleClick={handleClick}
                    paginate={paginate}
                    pageNumbers={props.pageNumbers}
                    />

                    <LastPageLogic 
                    currentPage={props.currentPage}
                    handleClick={handleClick}
                    paginate={paginate}
                    pageNumbers={props.pageNumbers}
                    />
                    
                    <InputPageNumber 
                    setCurrentPage={props.setCurrentPage}                    
                   />
                
                </ul>
            </nav>
        </div>
    )
}

export default Pagination