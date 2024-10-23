import React from 'react'
import OrderItem from '../OrderItem/OrderItem'
import styles from './Order.module.css'

function Order({cart, deleteProduct, deleteAll, totalSale}) {
  return (
    <div className={styles["second-section"]}>
        <OrderItem deleteProduct={deleteProduct} deleteAll={deleteAll} cart={cart} totalSale={totalSale}/>
    </div>
  )
}

export default Order