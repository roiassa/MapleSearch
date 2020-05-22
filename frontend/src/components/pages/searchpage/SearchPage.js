import React, { useState } from 'react'
import BackToAllItemsSearch from './BackToAllItemsSearch'
import DropdownJobMenu from './DropDownJobMenu'
import InputSearch from './InputSearch'
import IsCashButton from './IsCashButton'
import LoadingPage from '../LoadingPage'
import AllItems from './AllItems'
import JobItems from './JobItems'
import FilteredItems from './FilteredItems'
import Pagination from './Pagination'


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
            <div className='search-options'>
                {activePerJobSearch ?
                    <BackToAllItemsSearch 
                    setActivePerJobSearch={setActivePerJobSearch}
                    />
                    :
                    null
                }

                <DropdownJobMenu
                    setItems={setItems}
                    isCash={isCash}
                    isLoading={isLoading}
                    setActivePerJobSearch={setActivePerJobSearch}
                    setIsLoading={setIsLoading}
                    setCurrentPage={setCurrentPage}
                    setSearch={setSearch}
                />

                <InputSearch
                    search={search}
                    setSearch={setSearch}
                    allItems={allItems}
                    items={items}
                    filteredItems={filteredItems}
                    setFilteredItems={setFilteredItems}
                    setInputActiveSearch={setInputActiveSearch}
                    activePerJobSearch={activePerJobSearch}
                    setCurrentPage={setCurrentPage}
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