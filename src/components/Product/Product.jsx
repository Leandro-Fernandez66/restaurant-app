import React from 'react'
import styles from "./Product.module.css"

function Product({product, onClickHandler}) {
  return (
    <div className={styles["card-product"]} onClick={() => onClickHandler(product.id)}>
      <p className={styles.icon}>{product.name}</p>
      <div className={styles.stock}>{product.stock}<span className={styles.span}>stock</span></div>
    </div>    
  )
}

export default Product

























