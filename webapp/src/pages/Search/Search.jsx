import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import Container from '../../components/Container/Container'
import styles from './Search.module.css'
import SearchCatalog from '../../components/SearchCatalog/SearchCatalog'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className={styles.search}>
      <header className={styles.header}>
        <Container className={styles.searchContainer}>
          <SearchBar setSearchQuery={setSearchQuery} />
        </Container>
      </header>
      <main>
        <Container className={styles.main}>
          <SearchCatalog searchQuery={searchQuery} />
        </Container>
      </main>
    </div>
  )
}

export default Search