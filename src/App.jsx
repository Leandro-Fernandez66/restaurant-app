import React, {useEffect, useState} from 'react'
import OrderPicker from './components/OrderPicker/OrderPicker'
import Order from './components/Order/Order'
import './App.css'

function App() {

  const hardCodeProducts = [
    {
      id: 0,
      name: "🍕",
      price: 100,
      quantity: 1
    },
    {
      id: 1,
      name: "🍟",
      price: 50,
      quantity: 1  
    },
    {
      id: 2,
      name: "🍦",
      price: 100,
      quantity: 1
    },
    {
      id: 3,
      name: "🥤",
      price: 65,
      quantity: 1 
    },
    {
      id: 4,
      name: "🥦",
      price: 250,
      quantity: 1 
    },
    {
      id: 5,
      name: "🍜",
      price: 200,
      quantity: 1 
    } 
  ]

  const [products, setProducts] = useState(hardCodeProducts)
  const [cart, setCart] = useState([])
  const [totalSale, setTotalSale] = useState(0)
  
  useEffect(() => {setTotalSale(saleProducts)}, [cart])

  const onClickHandler = (productId) => {
    const duplicateProduct = cart.find((duplicate) => duplicate.id === productId)
    if (duplicateProduct === undefined) {
      const idProductAdded = products.findIndex((product) => product.id === productId);
      const objetProduct = hardCodeProducts[idProductAdded]
      const newProduct = [...cart, objetProduct]
      setCart(newProduct)
    } else {
      const newCarts = cart.map((newCart) => {
        if (newCart.id === productId) {
          newCart.quantity++
        }
        return newCart
      })
      setCart(newCarts)
      console.log(newCarts)
    }
  }
  
  const deleteProduct = (productId) => {
   const productRemove= cart.filter((removeOfCart) => removeOfCart.id !== productId)
   setCart(productRemove) 
  }

  const deleteAll = () => {
    setCart([])
  }

  const saleProducts = cart.reduce(
   (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
    0
  )
  
  return (
   <div className='main'>
     <OrderPicker onClickHandler={onClickHandler} products={products}/>
     <Order deleteProduct={deleteProduct} deleteAll={deleteAll} cart={cart} totalSale={totalSale}/>
   </div>
  )
}

export default App
