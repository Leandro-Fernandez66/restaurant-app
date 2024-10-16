import React from 'react'
import styles from './Cart.module.css'

function Cart({name, price, quantity}) {
  return (
    <div className={styles.card}>
      <p className={styles.icon}>{name}</p>
      <p>x {quantity}</p>
      <p>${price}</p>
      <button className={styles.button}>❌</button>
    </div>
  )
}

export default Cart

//