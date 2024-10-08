import React from 'react'
import OrderPicker from '../OrderPicker/OrderPicker'
import Order from '../Order/Order'
import styles from './OrderPage.module.css'

function OrderPage() {
  return (
    <div className={styles.main}>
        <OrderPicker />
        <Order />
    </div>
  )
}

export default OrderPage