import React from 'react'
import FirstPageLogic from './FirstPageLogic'
import AllPageLogic from './AllPageLogic'
import LastPageLogic from './LastPageLogic'


function Pagination(props) {
    const pageNumbers = [];

    if (!props.inputActiveSearch && props.activePerJobSearch) {
        for (let i = 1; i <= Math.ceil(props.totalJobItems / props.itemsPerPage); i++) {
            pageNumbers.push(i)
        }
    } else if (props.inputActiveSearch === false && props.activePerJobSearch === false) {
        for (let i = 1; i <= Math.ceil(props.totalAllItems / props.itemsPerPage); i++) {
            pageNumbers.push(i)
        }
    } 
    else {
        for (let i = 1; i <= Math.ceil(props.totalFilteredItems / props.itemsPerPage); i++) {
            pageNumbers.push(i)
        }
    }

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
            <span>Page: {props.currentPage}</span>
            <nav>
                <ul className="pagination">
                    
                    <FirstPageLogic 
                    currentPage={props.currentPage}
                    handleClick={handleClick}
                    paginate={paginate}
                    />

                    <AllPageLogic 
                    currentPage={props.currentPage}
                    handleClick={handleClick}
                    paginate={paginate}
                    pageNumbers={pageNumbers}
                    />

                    <LastPageLogic 
                    currentPage={props.currentPage}
                    handleClick={handleClick}
                    paginate={paginate}
                    pageNumbers={pageNumbers}
                    />
        
                </ul>
            </nav>
        </div>
    )
}

export default Pagination