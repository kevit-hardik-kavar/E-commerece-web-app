import React from 'react'
// import { useDispatch } from 'react-redux'
// import { cartActions } from '../store/cartSlice'
import './Product.css'
import {Link} from "react-router-dom"

const Product = ({ id, title, price,imgUrl }) => {
    // const dispatch = useDispatch()
    
    // const addToCart = ()=>{
    //     dispatch(cartActions.addToCart({
    //         title,
    //         price,
    //         id
    //     }))
    // }


    return (
        <Link to={`/product/${id}`}> 
        <div className='card-item' key={id} >
            <img src={imgUrl} alt={title} width={100} height={100} />
            {/* <p>{title}</p> */}
            <h2>${price}</h2>
            <div className="addToCart">
            
                <button>Buy Now</button>
              
            </div>
        </div>
        </Link>
       
    )
}
export default Product
