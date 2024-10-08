import React from 'react'
import Product from '../Product/Product'
import styles from './ProductList.module.css'

const products = [
    {
      id: 0,
      name: "🍔",
      price: 100,
      quantity: 0
    },
    {
      id: 1,
      name: "🍟",
      price: 50,
      quantity: 0  
    },
    {
      id: 2,
      name: "🍦",
      price: 100,
      quantity: 0
    },
    {
      id: 3,
      name: "🥤",
      price: 65,
      quantity: 0 
    },
    {
      id: 4,
      name: "🥦",
      price: 250,
      quantity: 0 
    },
    {
      id: 5,
      name: "🍜",
      price: 200,
      quantity: 0 
    } 
  ]

function ProductList() {
  return (
        <div className={styles["products-container"]}>
            {products.map((product) => (
               <Product product={product} />
            ))}
        </div>
  )
}

export default ProductList  




//<Product id={product.id} name={product.name} price={product.price} quantity={product.quantity} />