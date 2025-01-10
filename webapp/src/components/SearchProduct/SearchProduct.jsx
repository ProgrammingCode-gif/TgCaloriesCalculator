import React from 'react'
import styles from './SearchProduct.module.css'

const SearchProduct = ({name, kcall}) => {
    return (
        <div className={styles.productContainer}>
            <h3 className={styles.title}>{name}</h3>
            <p>{kcall}</p>
        </div>
    )
}

export default SearchProduct