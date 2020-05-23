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
                    setCurrentPage={props.setCurrentPage}
                    setSearch={props.setSearch}
                    />
                    :
                    null
                }

                <DropdownJobMenu
                    setItems={props.setItems}
                    isCash={props.isCash}
                    isLoading={props.isLoading}
                    setActivePerJobSearch={props.setActivePerJobSearch}
                    setIsLoading={props.setIsLoading}
                    setCurrentPage={props.setCurrentPage}
                    setSearch={props.setSearch}
                />

                <InputSearch
                    search={props.search}
                    setSearch={props.setSearch}
                    allItems={props.allItems}
                    items={props.items}
                    filteredItems={props.filteredItems}
                    setFilteredItems={props.setFilteredItems}
                    setInputActiveSearch={props.setInputActiveSearch}
                    activePerJobSearch={props.activePerJobSearch}
                    setCurrentPage={props.setCurrentPage}
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