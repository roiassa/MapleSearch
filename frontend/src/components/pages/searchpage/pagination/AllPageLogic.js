import React from 'react'


function AllPageLogic(props) {
    
    return (
        <React.Fragment>
            {props.currentPage === 0 ? props.pageNumbers.slice(props.currentPage, props.currentPage + 8).map(number => {
                return <li key={number} className="page-item">
                    <a href='#!' onClick={() => props.handleClick(props.paginate, number)} className="page-link">
                        {number + 1}
                    </a>
                </li>
            }) :
                props.pageNumbers.slice(props.currentPage, props.currentPage + 8).map(number => {
                    return <li key={number} className="page-item">
                        <a href='#!' onClick={() => props.handleClick(props.paginate, number)} className="page-link">
                            {number + 1}
                        </a>
                    </li>
                })}
        </React.Fragment>
    )
}

export default AllPageLogic