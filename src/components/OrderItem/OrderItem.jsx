import React from 'react'
import OrderTotal from '../OrderTotal/OrderTotal'
import styles from './OrderItem.module.css'
import Cart from '../Cart/Cart'

function OrderItem() {
  return (
    <div className={styles["orderItem-div"]}>
      <div className={styles["title-deleteButton"]}>
        <h2>Order List</h2>
        <button className={styles["delete-button"]}>🗑</button>
      </div>  
        <div className={styles["add-products"]}>
          <Cart name={"🍟"}  price={50} quantity={1} />
          <Cart name={"🥦"}  price={500} quantity={2} />
        </div>
        <OrderTotal />
    </div>
  )
}

export default OrderItem