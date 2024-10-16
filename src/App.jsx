import React, {useState} from 'react'
import OrderPicker from './components/OrderPicker/OrderPicker'
import Order from './components/Order/Order'
import './App.css'

function App() {

  const hardCodeProducts = [
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

  const [products, setProducts] = useState(hardCodeProducts)

  const onClickHandler = (productId) => {
    console.log('id' )
  }

  return (
   <div className='main'>
     <OrderPicker onClickHandler={onClickHandler} products={products}/>
     <Order />
   </div>
  )
}

export default App
