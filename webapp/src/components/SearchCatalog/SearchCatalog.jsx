import React, { useEffect, useState } from 'react'
import styles from './SearchCatalog.module.css'
import SearchProduct from '../SearchProduct/SearchProduct'

const SearchCatalog = ({searchQuery}) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
      const apiUrl = `http://localhost:2000/products?name=${searchQuery}`
      const fetchData = async () => {
        try {
            const response = await fetch(apiUrl)
            const result = await response.json()
            setProducts(result)
  
        } catch (error) {
          setError(error)
  
        } finally {
          setLoading(false)
        }
      }
      if(searchQuery != '') {
        fetchData()
      }
    }, [searchQuery])

  if(loading && searchQuery !== '') {
    return <div>Загрузка...</div>
  }

  if(error) {
    return <div>Ошибка</div>
  }

  return (
    <div className={styles.productCatalog}>
      {
        products ? products.foods.food.map((product) => <SearchProduct key={product.food_id} name={product.food_name} kcall={3000} />) : ''
      }
    </div>
  )
}

export default SearchCatalog