import React from 'react'
import styles from './Cart.module.css'

function Cart({addToCart, deleteProduct}) {
  return (
    <div className={styles.card}>
      <p className={styles.icon}>{addToCart.name}</p>
      <p>x {addToCart.quantity}</p>
      <p>${addToCart.price}</p>
      <button className={styles.button} onClick={() => deleteProduct(addToCart.id)}>❌</button>
    </div>
  )
}

export default Cart

