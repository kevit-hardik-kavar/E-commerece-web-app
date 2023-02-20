import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../store/cartSlice'
import CartItem from './CartItem'
import './CartItems.css'



const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList)
  const itemsList = useSelector(state => state.cart.itemsList)
  const dispatch = useDispatch()
  const [greet, setGreet] = useState(false)



  let totalAmount = 0;

  itemsList.forEach(item => {
    totalAmount += item.totalPrice
  })
  let n = totalAmount.toFixed(2)
  const handlePlaceOrder = () => {
    if (itemsList.length < 1) {
      alert("Please add something in cart to place order")
    } else {
      setGreet(true)
      dispatch(cartActions.setQuantityZero())
      dispatch(cartActions.setItemListEmpty())

     
    }
  }
  // const handleShopping = () => {
  //   dispatch(cartActions.setQuantityZero())
  // }
  return (
    <div>
      {!greet && <div className='cartItems'>
        <h2>Your Cart</h2>
        {cartItems.length === 0 && <h2 style={{ margin: "0px" }}>Oops !! Your Cart is Empty </h2>}

        <div>
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
        </div>
        <div className="total">
          {cartItems.length >= 1 && <h1 style={{ margin: "0px" }}>Total :${n} </h1>}
          <button onClick={handlePlaceOrder}>Place Order</button>
          <Link to="/products">
            <button>Go to Shopping</button>
          </Link>

        </div>
      </div>}

      {greet && <div className='checkout-page'> <div className="greeting">
        <h1>Congratulations</h1>
        <h2>Your Order has been placed sucessfully !</h2>
        {/* {
          cartItems.map((item) => (
            <CartItem
              id={item.id}
              quantity={item.quantity}
              title={item.title}
              price={item.price}
              total={item.totalPrice} />
          ))} */}
        {/* <h2>Total : ${n}</h2> */}
      </div>
        <div className="home">
          <Link to="/header">
            <button>Back to Home</button>
          </Link>
        </div>
      </div>
      }
    </div>
  )
}

export default CartItems

