import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'

import './CartItem.css'

const CartItem = ({id,title,price,total,quantity}) => {
    const dispatch = useDispatch()
    let roundOff = total.toFixed(2)
    const increment = () =>{
        dispatch(cartActions.addToCart({
          title,
          id,
          price,
          quantity,
          total
        }))
    }
    const decrement = () =>{
       dispatch(cartActions.removeFromCart(id))
    }
   
  return (
    <div className='cart-item' key={id}>
      <p>{title}</p>
      <h2>{price}</h2>
      <h3>x{quantity}</h3>
      <h2>${roundOff}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  
  )
}

export default CartItem
