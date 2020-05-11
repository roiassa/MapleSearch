import React, { useState } from 'react'
import DropdownJobMenu from './DropDownJobMenu'
import JobItems from './JobItems'
import IsCashButton from './IsCashButton'


function SearchPage() {

    const [items, setItems] = useState([])
    const [isCash, setIsCash] = useState(false)

    return (
        <React.Fragment>
            <div className='search-options'>
                <DropdownJobMenu
                    setItems={setItems}
                    isCash={isCash}
                />
                <IsCashButton
                    isCash={isCash}
                    setIsCash={setIsCash}
                />
            </div>
            <div className='items-list'>
                <JobItems
                    items={items}
                />
            </div>
        </React.Fragment>
    )
}

export default SearchPage