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

    return (
        <React.Fragment>
            <div className='search-options'>
                <DropdownJobMenu
                    setItems={setItems}
                    isCash={isCash}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
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
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={items.length}
                            setCurrentPage={setCurrentPage}
                            setIsLoading={setIsLoading}
                        />
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}

export default SearchPage