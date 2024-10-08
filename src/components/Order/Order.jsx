import React from 'react'
import OrderItem from '../OrderItem/OrderItem'
import styles from './Order.module.css'

function Order() {
  return (
    <div className={styles["second-section"]}>
        <OrderItem />
    </div>
  )
}

export default Order