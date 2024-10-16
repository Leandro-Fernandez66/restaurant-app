//import React, {useState} from 'react'
import OrderPicker from './components/OrderPicker/OrderPicker'
import Order from './components/Order/Order'
import './App.css'

function App() {

  //const [products, setProducts] = useState([])

  return (
   <div className='main'>
     <OrderPicker />
     <Order />
   </div>
  )
}

export default App
