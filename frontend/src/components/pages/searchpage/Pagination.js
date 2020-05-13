import React from 'react'

function Pagination({itemsPerPage, totalItems, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                   return <li key={number} href="/search" className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination
