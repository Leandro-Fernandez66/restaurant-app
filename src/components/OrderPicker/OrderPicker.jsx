import React from 'react'
import ProductList from '../ProductList/ProductList'
import styles from './OrderPicker.module.css'

function OrderPicker({products, onClickHandler}) {
  return (
    <div className={styles["first-section"]}>
        <h1 className={styles.title}>Add to your order:</h1>
        <ProductList onClickHandler={onClickHandler} products={products}/>
    </div>
  )
}

export default OrderPicker
