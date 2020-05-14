import React, { useState } from 'react'
import DropdownJobMenu from './DropDownJobMenu'
import JobItems from './JobItems'
import IsCashButton from './IsCashButton'
import LoadingPage from '../LoadingPage'
import Pagination from './Pagination'


function SearchPage() {

    const [items, setItems] = useState([])
    const [isCash, setIsCash] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    const [activeSearch, setActiveSearch] = useState(false)

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
                <IsCashButton
                    isCash={isCash}
                    setIsCash={setIsCash}
                />
            </div>

            <div className='items-list'>
                {isLoading ? <LoadingPage
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                    :
                    <React.Fragment>
                        <JobItems
                            items={items}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                        />
                        {activeSearch ? <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={items.length}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            setIsLoading={setIsLoading}
                        /> : null}

                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}

export default SearchPage