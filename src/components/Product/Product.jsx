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







//<div>
// <span>{props.id}</span>
// <p className={styles.icon}>{props.name}</p>
// <p>{props.price}</p>
// <p>{props.quantity}</p>
//</div>