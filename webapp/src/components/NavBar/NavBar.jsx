import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../Container/Container'
import styles from './NavBar.module.css'
import { FiHome } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Container className={styles.container}>
                <NavLink className={({isActive}) => isActive? `${styles.link} ${styles.linkActive}` : styles.link} to="/"><FiHome size={20} className={styles.icon}/></NavLink>
                <NavLink className={({isActive}) => isActive? `${styles.link} ${styles.linkActive}` : styles.link} to="/about"><FiBookmark className={styles.icon} size={20} /></NavLink>
                <NavLink className={({isActive}) => isActive? `${styles.link} ${styles.linkActive}` : styles.link} to="/extra">Extra</NavLink>
            </Container>
        </nav>
    )
}

export default NavBar