import React from 'react'

function AllPageLogic(props) {
    return (
        <React.Fragment>
            {props.pageNumbers.slice(props.currentPage - 1, props.currentPage + 8).map(number => {
                return <li key={number} href="/search" className="page-item">
                    <a href='#!' onClick={() => props.handleClick(props.paginate, number)} className="page-link">
                        {number}
                    </a>
                </li>
            })}
        </React.Fragment>
    )
}

export default AllPageLogic