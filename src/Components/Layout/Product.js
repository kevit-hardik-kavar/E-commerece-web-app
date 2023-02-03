import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import './Product.css'

const Product = ({ id, title, price,imgUrl }) => {
    const dispatch = useDispatch()
    
    const addToCart = ()=>{
        dispatch(cartActions.addToCart({
            title,
            price,
            id,

        }))
    }

    return (
        <div className='card-item' key={id} >
            <img src={imgUrl} alt={title} width={100} height={100} />
            {/* <p>{title}</p> */}
            <h2>${price}</h2>
            <div className="addToCart">
                <button onClick={addToCart} >Add To Cart</button>
            </div>
        </div>
    )
}
export default Product
