import React from 'react'
import Product from '../Product/Product'
import styles from './ProductList.module.css'

function ProductList({products, onClickHandler}) {

  return (
        <div className={styles["products-container"]}>
            {products.map((product) => (
               <Product key={product.id} onClickHandler={onClickHandler} product={product} />
            ))}
        </div>
  )
}

export default ProductList  