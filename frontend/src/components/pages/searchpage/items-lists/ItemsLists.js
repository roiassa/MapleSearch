import React, { useState,useEffect } from 'react'
import LoadingPage from '../LoadingPage'
import AllItems from './AllItems'
import JobItems from './JobItems'
import FilteredItems from './FilteredItems'
import Pagination from '../pagination/Pagination'


function ItemsLists(props) {

    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        props.setIsLoading(true)
    }, [])

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
                            allItems={props.allItems}
                            setAllItems={props.setAllItems}
                            setPageNumbers={setPageNumbers}
                            itemsPerPage={props.itemsPerPage}
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
                            jobItems={props.jobItems}
                            itemsPerPage={props.itemsPerPage}
                            currentPage={props.currentPage}
                            currentItems={props.currentItems}
                            setCurrentItems={props.setCurrentItems}
                        />
                        :
                        null
                    }

                    {props.inputActiveSearch ?
                        <FilteredItems
                            filteredItems={props.filteredItems}
                            itemsPerPage={props.itemsPerPage}
                            currentPage={props.currentPage}
                            currentItems={props.currentItems}
                            setCurrentItems={props.setCurrentItems}
                        />
                        :
                        null
                    }

                    {
                        <Pagination
                            itemsPerPage={props.itemsPerPage}
                            allItems={props.allItems}
                            currentItems={props.currentItems}
                            setAllItems={props.setAllItems}
                            setPageNumbers={setPageNumbers}
                            pageNumbers={pageNumbers}
                            isCash={props.isCash}
                            totalAllItems={props.allItems.length}
                            totalJobItems={props.jobItems.length}
                            totalFilteredItems={props.filteredItems.length}
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