import React from 'react'
import styles from "./Product.module.css"

function Product({product}) {
  return (
    <div key={product.id} className={styles["card-product"]}>
      <p className={styles.icon}>{product.name}</p>
    </div>    
  )
}

export default Product

























