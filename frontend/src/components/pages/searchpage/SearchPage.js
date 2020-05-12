import React, { useState } from 'react'
import DropdownJobMenu from './DropDownJobMenu'
import JobItems from './JobItems'
import IsCashButton from './IsCashButton'
import LoadingPage from '../LoadingPage'


function SearchPage() {

    const [items, setItems] = useState([])
    const [isCash, setIsCash] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

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
                <LoadingPage
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                <JobItems
                    items={items}
                />
            </div>
        </React.Fragment>
    )
}

export default SearchPage