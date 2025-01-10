import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({setSearchQuery}) => {
    const [search, setSearch] = useState('')
    const [isActive, setIsActive] = useState(false)

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handlerInput = (event) => {
        setIsActive(true)
    }

    const handlerBlur = (event) => {
        setIsActive(false)
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            setSearchQuery(search)
        }
    }

    return (
        <div className={isActive ? `${styles.layout} ${styles.layoutActive}` : styles.layout}>
            <input placeholder='Поиск...' 
                className={styles.input} 
                onFocus={handlerInput} 
                onChange={handleChange} 
                onBlur={handlerBlur}
                onKeyDown={handleKeyDown}
                type="text"
            />
            {/* <button className={styles.btn}>S</button> */}
            <CiSearch size={20}></CiSearch>
            
        </div>
    )
}

export default SearchBar