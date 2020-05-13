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

    //Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
                            items={currentItems}
                            itemsPerPage={itemsPerPage}
                        />
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={items.length}
                            paginate={paginate}
                        />
                    </React.Fragment>
                }


            </div>
        </React.Fragment>
    )
}

export default SearchPage