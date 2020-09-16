import React from 'react'
import LoadingPage from '../LoadingPage'
import AllItems from './AllItems'
import JobItems from './JobItems'
import FilteredItems from './FilteredItems'
import Pagination from '../pagination/Pagination'


function ItemsLists(props) {

    // useEffect(() => {
    //     props.setIsLoading(true)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    
    return (
        <div className='items-list'>
            {props.isLoading ?
                <LoadingPage
                    isLoading={props.isLoading}
                    setIsLoading={props.setIsLoading}
                />
                :
                <React.Fragment>
                    {!props.activePerJobSearch && !props.inputActiveSearch ?
                        <AllItems
                            isLoading={props.isLoading}
                            setIsLoading={props.setIsLoading}
                            setPageNumbers={props.setPageNumbers}
                            currentPage={props.currentPage}
                            currentItems={props.currentItems}
                            setCurrentItems={props.setCurrentItems}
                            isCash={props.isCash}
                        />
                        :
                        null
                    }

                    {props.activePerJobSearch && !props.inputActiveSearch ?
                        <JobItems
                            currentJob={props.currentJob}
                            currentPage={props.currentPage}
                            currentItems={props.currentItems}
                            setCurrentItems={props.setCurrentItems}
                            setPageNumbers={props.setPageNumbers}
                            isCash={props.isCash}
                        />
                        :
                        null
                    }

                    {props.inputActiveSearch ?
                        <FilteredItems
                            currentPage={props.currentPage}
                            currentItems={props.currentItems}
                            setCurrentItems={props.setCurrentItems}
                        />
                        :
                        null
                    }

                    {
                        <Pagination
                            currentItems={props.currentItems}
                            setPageNumbers={props.setPageNumbers}
                            pageNumbers={props.pageNumbers}
                            isCash={props.isCash}
                            setCurrentPage={props.setCurrentPage}
                            currentPage={props.currentPage}
                            setIsLoading={props.setIsLoading}
                            inputActiveSearch={props.inputActiveSearch}
                            activePerJobSearch={props.activePerJobSearch}
                        />
                    }
                </React.Fragment>
            }
        </div>
    )
}

export default ItemsLists