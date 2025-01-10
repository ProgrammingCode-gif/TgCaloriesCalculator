import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../Container/Container'
import styles from './NavBar.module.css'
import { FiHome } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { IoCalculatorOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
    const [size, setSize] = useState(25)
    return (
        <nav className={styles.navBar}>
            <Container className={styles.container}>
                <NavLink className={({isActive}) => isActive? `${styles.link} ${styles.linkActive}` : styles.link} to="/"><FiHome className={styles.icon} size={size}/></NavLink>
                <NavLink className={({isActive}) => isActive? `${styles.link} ${styles.linkActive}` : styles.link} to="/favourite"><FiBookmark className={styles.icon} size={size} /></NavLink>
                <NavLink className={({isActive}) => isActive? `${styles.link} ${styles.linkActive}` : styles.link} to="/search"><FiSearch className={styles.icon} size={size}/></NavLink>
                <NavLink className={({isActive}) => isActive? `${styles.link} ${styles.linkActive}` : styles.link} to="/calculator"><IoCalculatorOutline className={styles.icon} size={size}/></NavLink>
            </Container>
        </nav>
    )
}

export default NavBar