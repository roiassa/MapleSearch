import React, { useState, useEffect } from 'react'
import DropdownJobMenu from './DropDownJobMenu'
import JobItems from './JobItems'


function SearchPage() {

    const [items, setItems] = useState([])


    return (
        <React.Fragment>
            <div className='search-options'>
                <DropdownJobMenu
                    setItems={setItems}
                />
            </div>
            <JobItems
                items={items}
            />
        </React.Fragment>
    )
}

export default SearchPage