import React, { useState } from 'react'
import SearchOptions from './search-options/SearchOptions'
import LoadingPage from '../LoadingPage'
import AllItems from './AllItems'
import JobItems from './JobItems'
import FilteredItems from './FilteredItems'
import Pagination from './pagination/Pagination'


function SearchPage() {

    const [allItems, setAllItems] = useState([])
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [search, setSearch] = useState('')
    const [isCash, setIsCash] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    const [activePerJobSearch, setActivePerJobSearch] = useState(false)
    const [inputActiveSearch, setInputActiveSearch] = useState(false)


    return (
        <React.Fragment>
            <SearchOptions
                isCash={isCash}
                setIsCash={setIsCash}
                search={search}
                setSearch={setSearch}
                allItems={allItems}
                items={items}
                setItems={setItems}
                filteredItems={filteredItems}
                setFilteredItems={setFilteredItems}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                activePerJobSearch={activePerJobSearch}
                setActivePerJobSearch={setActivePerJobSearch}
                setInputActiveSearch={setInputActiveSearch}
                setCurrentPage={setCurrentPage}
            />
            <div className='items-list'>
                {isLoading ?
                    <LoadingPage
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                    :
                    <React.Fragment>
                        {!activePerJobSearch && !inputActiveSearch ?
                            <AllItems
                                allItems={allItems}
                                setAllItems={setAllItems}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                isCash={isCash}
                            />
                            :
                            null
                        }

                        {activePerJobSearch && !inputActiveSearch ?
                            <JobItems
                                items={items}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                            />
                            :
                            null
                        }

                        {inputActiveSearch ?
                            <FilteredItems
                                filteredItems={filteredItems}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                            />
                            :
                            null
                        }

                        {
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalAllItems={allItems.length}
                                totalJobItems={items.length}
                                totalFilteredItems={filteredItems.length}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                setIsLoading={setIsLoading}
                                inputActiveSearch={inputActiveSearch}
                                activePerJobSearch={activePerJobSearch}
                            />
                        }
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}

export default SearchPage