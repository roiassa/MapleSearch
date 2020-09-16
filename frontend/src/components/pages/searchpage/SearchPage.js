import React, { useState } from 'react'
import SearchOptions from './search-options/SearchOptions'
import ItemsLists from './items-lists/ItemsLists'


function SearchPage() {

    const [currentJob, setCurrentJob] = useState('')
    const [search, setSearch] = useState('')
    const [isCash, setIsCash] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [pageNumbers, setPageNumbers] = useState([])
    const [currentItems, setCurrentItems] = useState([])
    const [activePerJobSearch, setActivePerJobSearch] = useState(false)
    const [inputActiveSearch, setInputActiveSearch] = useState(false)
    
    return (
        <React.Fragment>
            <SearchOptions
                isCash={isCash}
                setIsCash={setIsCash}
                search={search}
                setSearch={setSearch}
                currentItems={currentItems}
                setCurrentItems={setCurrentItems}
                currentJob={currentJob}
                setCurrentJob={setCurrentJob}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                activePerJobSearch={activePerJobSearch}
                setActivePerJobSearch={setActivePerJobSearch}
                inputActiveSearch={inputActiveSearch}
                setInputActiveSearch={setInputActiveSearch}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageNumbers={pageNumbers}
                setPageNumbers={setPageNumbers}
            />

            <ItemsLists
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                currentJob={currentJob}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageNumbers={pageNumbers}
                setPageNumbers={setPageNumbers}
                currentItems={currentItems}
                setCurrentItems={setCurrentItems}
                isCash={isCash}
                inputActiveSearch={inputActiveSearch}
                activePerJobSearch={activePerJobSearch}
            />
        </React.Fragment >
    )
}

export default SearchPage