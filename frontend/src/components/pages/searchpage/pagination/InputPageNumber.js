import React from 'react'

function InputPageNumber(props) {

    const handleChange = (e) => {
        if(e.target.value === '') {
            props.setCurrentPage(1)
        } 
        else if (isNaN(e.target.value)) {
            alert('Only numbers allowed!')
        }
        
        else {
            props.setCurrentPage(parseInt(e.target.value))
        }
    }

    return (
        <React.Fragment>
            <input type="text" placeholder="Type a page number..." onChange={(e) => handleChange(e)}></input>
        </React.Fragment>
    )
}

export default InputPageNumber