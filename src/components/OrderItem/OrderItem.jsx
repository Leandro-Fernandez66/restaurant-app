import React from 'react'
import OrderTotal from '../OrderTotal/OrderTotal'
import styles from './OrderItem.module.css'
import Cart from '../Cart/Cart'

function OrderItem({cart, deleteProduct, deleteAll, totalSale}) {
  return (
    <div className={styles["orderItem-div"]}>
      <div className={styles["title-deleteButton"]}>
        <h2>Order List</h2>
        <button className={styles["delete-button"]} onClick={() => deleteAll()} >🗑</button>
      </div>  
        <div className={styles["add-products"]}>
          {cart.map((addToCart) =>( 
            <Cart deleteProduct={deleteProduct} addToCart={addToCart} />
          ))}
        </div>
        <OrderTotal totalSale={totalSale} />
    </div>
  )
}

export default OrderItem
