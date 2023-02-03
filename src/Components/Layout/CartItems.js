import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import './CartItems.css'



const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList)
  const itemsList = useSelector(state => state.cart.itemsList)
  const [greet, setGreet] = useState(false)



  let totalAmount = 0;

  itemsList.forEach(item => {
    totalAmount += item.totalPrice
  })
  let n = totalAmount.toFixed(2)
  const handlePlaceOrder = () => {
    if(itemsList.length < 1){
      alert("Please add something to place order")
    }else{
      setGreet(true)
    }
  }
  const handleShopping = () => {
    window.location.reload()
  }
  return (
    <div>


      {!greet && <div className='cartItems'>
        <h2>Your Cart</h2>

        <ul>
          {
            cartItems.map((item) => (
              <CartItem
                id={item.id}
                quantity={item.quantity}
                title={item.title}
                price={item.price}
                total={item.totalPrice} />
            ))
          }
        </ul>
        <div className="total">
          <h1>Total :${n} </h1>
          <button onClick={handlePlaceOrder}>Place Order</button>
          <button onClick={handleShopping}>Go to Shopping</button>

        </div>
      </div> }

      {greet && <div className="greeting">
        <h1>Congratulations</h1>
        <h2>Your Order has been placed sucessfully !</h2>
        <button onClick={handleShopping}>Go to Shopping</button>
      </div>
      }
    </div>
  )
}

export default CartItems

