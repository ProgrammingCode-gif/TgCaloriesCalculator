import React from 'react'
import styles from './Footer.module.css'
import NavBar from '../NavBar/NavBar'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <NavBar></NavBar>
    </footer>
  )
}

export default Footer