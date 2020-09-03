import React, { useEffect } from 'react'

function InputSearch(props) {

    useEffect(() => {

        props.setCurrentPage(0)

        if (props.search === '') {
            props.setInputActiveSearch(false)
        } else {
            props.setInputActiveSearch(true)
        }

        if (props.activePerJobSearch === true) {
            props.setFilteredItems(props.jobItems.filter(item => { return item.name.toLowerCase().includes(props.search.toLowerCase()) }))
        } else {
            props.setFilteredItems(props.allItems.filter(item => { return item.name.toLowerCase().includes(props.search.toLowerCase()) }))
        }

    }, [props.search])

    return (
        <div className="input-search-div">
            <input type="text" placeholder="Search for an item" onChange={(e) => props.setSearch(e.target.value)}></input>
        </div>
    )
}
export default InputSearch


