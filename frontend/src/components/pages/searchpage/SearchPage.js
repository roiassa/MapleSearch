import React, { useState } from 'react'
import DropdownJobMenu from './DropDownJobMenu'
import InputSearch from './InputSearch'
import IsCashButton from './IsCashButton'
import LoadingPage from '../LoadingPage'
import JobItems from './JobItems'
import FilteredItems from './FilteredItems'
import Pagination from './Pagination'


function SearchPage() {

    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [isCash, setIsCash] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    const [activeSearch, setActiveSearch] = useState(false)
    const [inputActiveSearch, setInputActiveSearch] = useState(false)


    return (
        <React.Fragment>
            <div className='search-options'>
                <DropdownJobMenu
                    setItems={setItems}
                    isCash={isCash}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    setActiveSearch={setActiveSearch}
                />

                <InputSearch
                    items={items}
                    setItems={setItems}
                    filteredItems={filteredItems}
                    setFilteredItems={setFilteredItems}
                    setInputActiveSearch={setInputActiveSearch}
                />

                <IsCashButton
                    isCash={isCash}
                    setIsCash={setIsCash}
                />
            </div>

            <div className='items-list'>
                {isLoading ? 
                    <LoadingPage
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    />
                    :
                    <React.Fragment>
                        {inputActiveSearch ?
                            <FilteredItems
                                filteredItems={filteredItems}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                            />
                            :
                            <JobItems
                                items={items}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                            />}
                        {activeSearch ? 
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={items.length}
                            totalFilteredItems={filteredItems.length}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            setIsLoading={setIsLoading}
                            inputActiveSearch={inputActiveSearch}
                        /> 
                        : 
                        null}
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}

export default SearchPage