import React from 'react'


function Pagination(props) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
        pageNumbers.push(i)
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
                    {props.currentPage === 1 ? null
                        :
                        <React.Fragment>
                            <li href="/search" className="page-item">
                                <a onClick={() => handleClick(paginate, 1)} className="page-link">
                                    1
                            </a>
                            </li>
                            <span className="page-link">...</span>
                        </React.Fragment>
                    }

                    {pageNumbers.slice(props.currentPage - 1, props.currentPage + 8).map(number => {
                        return <li key={number} href="/search" className="page-item">
                            <a onClick={() => handleClick(paginate, number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    })}

                    {props.currentPage === Math.max.apply(null, pageNumbers) ? null
                        :
                        <React.Fragment>
                            <span className="page-link">...</span>
                            <li href="/search" className="page-item">
                                <a onClick={() => handleClick(paginate, Math.max.apply(null, pageNumbers))} className="page-link">
                                    {Math.max.apply(null, pageNumbers)}
                                </a>
                            </li>
                        </React.Fragment>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination