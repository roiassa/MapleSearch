import React, { useState } from 'react'
import SearchOptions from './search-options/SearchOptions'
import ItemsLists from './items-lists/ItemsLists'


function SearchPage() {

    const [allItems, setAllItems] = useState([])
    const [jobItems, setJobItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [search, setSearch] = useState('')
    const [isCash, setIsCash] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [currentItems, setCurrentItems] = useState([])
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
                jobItems={jobItems}
                setJobItems={setJobItems}
                filteredItems={filteredItems}
                setFilteredItems={setFilteredItems}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                activePerJobSearch={activePerJobSearch}
                setActivePerJobSearch={setActivePerJobSearch}
                setInputActiveSearch={setInputActiveSearch}
                setCurrentPage={setCurrentPage}
            />

            <ItemsLists
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                allItems={allItems}
                setAllItems={setAllItems}
                jobItems={jobItems}
                filteredItems={filteredItems}
                totalAllItems={allItems.length}
                totalJobItems={jobItems.length}
                totalFilteredItems={filteredItems.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
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