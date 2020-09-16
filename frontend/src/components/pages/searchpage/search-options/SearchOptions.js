import React from 'react'
import BackToAllItemsSearch from './BackToAllItemsSearch'
import DropdownJobMenu from './DropDownJobMenu'
import InputSearch from './InputSearch'
import IsCashButton from './IsCashButton'

function SearchOptions(props) {

    return (
        <div className='search-options'>
                {props.activePerJobSearch ?
                    <BackToAllItemsSearch 
                    setActivePerJobSearch={props.setActivePerJobSearch}
                    setInputActiveSearch={props.setInputActiveSearch}
                    setCurrentPage={props.setCurrentPage}
                    setSearch={props.setSearch}
                    />
                    :
                    null
                }

                <DropdownJobMenu
                    setJobItems={props.setJobItems}
                    setCurrentItems={props.setCurrentItems}
                    currentJob={props.currentJob}
                    setCurrentJob={props.setCurrentJob}
                    isCash={props.isCash}
                    isLoading={props.isLoading}
                    setActivePerJobSearch={props.setActivePerJobSearch}
                    setInputActiveSearch={props.setInputActiveSearch}
                    setIsLoading={props.setIsLoading}
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage}
                    setSearch={props.setSearch}
                />

                <InputSearch
                    search={props.search}
                    setSearch={props.setSearch}
                    allItems={props.allItems}
                    jobItems={props.jobItems}
                    currentItems={props.currentItems}
                    setCurrentItems={props.setCurrentItems}
                    isCash={props.isCash}
                    filteredItems={props.filteredItems}
                    setFilteredItems={props.setFilteredItems}
                    inputActiveSearch={props.inputActiveSearch}
                    setInputActiveSearch={props.setInputActiveSearch}
                    activePerJobSearch={props.activePerJobSearch}
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage}
                    setPageNumbers={props.setPageNumbers}
                />

                <IsCashButton
                    isCash={props.isCash}
                    setIsCash={props.setIsCash}
                    setCurrentPage={props.setCurrentPage}
                />
            </div>
    )
}

export default SearchOptions