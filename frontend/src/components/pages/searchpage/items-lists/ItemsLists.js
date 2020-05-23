import React from 'react'
import LoadingPage from '../../LoadingPage'
import AllItems from './AllItems'
import JobItems from './JobItems'
import FilteredItems from './FilteredItems'
import Pagination from '../pagination/Pagination'


function ItemsLists(props) {
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
                                itemsPerPage={props.itemsPerPage}
                                currentPage={props.currentPage}
                                isCash={props.isCash}
                            />
                            :
                            null
                        }

                        {props.activePerJobSearch && !props.inputActiveSearch ?
                            <JobItems
                                items={props.items}
                                itemsPerPage={props.itemsPerPage}
                                currentPage={props.currentPage}
                            />
                            :
                            null
                        }

                        {props.inputActiveSearch ?
                            <FilteredItems
                                filteredItems={props.filteredItems}
                                itemsPerPage={props.itemsPerPage}
                                currentPage={props.currentPage}
                            />
                            :
                            null
                        }

                        {
                            <Pagination
                                itemsPerPage={props.itemsPerPage}
                                totalAllItems={props.allItems.length}
                                totalJobItems={props.items.length}
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