import React from 'react'


function Pagination(props) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    
    //Change page
    const paginate = (pageNumber) => props.setCurrentPage(pageNumber)
    
    const handleClick = (callBack) => {// eslint-disable-next-line
        callBack
        props.setIsLoading(true)
        setTimeout(() => {
            props.setIsLoading(false)
        }, 1000)
    }
    
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                   return <li key={number} href="/search" className="page-item">
                        <a onClick={() => handleClick(paginate(number))} className="page-link">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination