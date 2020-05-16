import React, { useState, useEffect } from 'react'

function InputSearch(props) {

    const [search, setSearch] = useState('')

    useEffect(() => {
        if (search === '') {
            props.setInputActiveSearch(false)
        } else {
            props.setInputActiveSearch(true)
        }

        props.setFilteredItems(props.items)
        props.setFilteredItems(props.items.filter(item => { return item.name.toLowerCase().includes(search.toLowerCase()) }))
    }, [search])

    return (
        <div className="input-search-div">
            <input type="text" placeholder="Search for an item" onChange={(e) => setSearch(e.target.value)}></input>
        </div>
    )
}
export default InputSearch