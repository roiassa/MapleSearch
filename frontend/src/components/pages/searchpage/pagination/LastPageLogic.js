import React from 'react'

function LastPageLogic(props) {
    return (
        <React.Fragment>
            {/* will show last page and the "..." span on any page except if the current page is the last page: */}
            {props.currentPage === Math.max.apply(null, props.pageNumbers) ? null
                        :
                        <React.Fragment>
                            <span className="page-link">...</span>
                            <li href="/search" className="page-item">
                                <a href='#!' onClick={() => props.handleClick(props.paginate, Math.max.apply(null, props.pageNumbers))} className="page-link">
                                    {Math.max.apply(null, props.pageNumbers)}
                                </a>
                            </li>
                        </React.Fragment>
                    }
        </React.Fragment>
    )
}

export default LastPageLogic