import React, { useEffect, useRef } from 'react'
import inputSearchItems from '../../../../helpers/apicalls/inputSearchItemsAPI'

function InputSearch(props) {

    const searchValue = useRef()

    const handleChange = (value => {
        // props.setCurrentPage(0)
        inputSearchItems(
            value,
            props.isCash,
            props.currentPage,
            props.setCurrentItems,
            props.setPageNumbers)

            if (!value) {
                props.setInputActiveSearch(false)
            } else {
                props.setInputActiveSearch(true)
            }
    })

    useEffect(() => {
        if(props.inputActiveSearch) {
            handleChange(searchValue.current.value)
        }      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isCash, props.currentPage])

    return (
        <div className="input-search-div">
            <input
            type="text" 
            placeholder="Search for an item" 
            onChange={(e) => handleChange(e.target.value)}
            ref={searchValue}    
            />
        </div>
    )
}
export default InputSearch
