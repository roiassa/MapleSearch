import React from 'react'

function FirstPageLogic(props) {
    return (
        <React.Fragment>
            {/* will show page 1 and the "..." span on any page except if the current page is page 1: */}
            {props.currentPage === 0 ? null
                :
                <React.Fragment>
                    <li href="/search" className="page-item">
                        <a href='#!' onClick={() => props.handleClick(props.paginate, 0)} className="page-link">
                            1
                </a>
                    </li>
                    <span className="page-link">...</span>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default FirstPageLogic