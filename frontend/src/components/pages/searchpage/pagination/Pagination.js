import React, {useState} from 'react'
import FirstPageLogic from './FirstPageLogic'
import AllPageLogic from './AllPageLogic'
import LastPageLogic from './LastPageLogic'
import InputPageNumber from './InputPageNumber'


function Pagination(props) {

    const [pageInputActive, setPageInputActive] = useState(false)

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
        <>
        {props.currentItems.length ? 
        <div className="pages-line">
            <span>Page: {pageInputActive ?
                props.currentPage :
                props.currentPage + 1}
            </span>
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
                    currentItems={props.currentItems} 
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
                    setPageInputActive={setPageInputActive}                    
                   />
                </ul>
            </nav>
        </div> : null}  
        </>
    )
}

export default Pagination