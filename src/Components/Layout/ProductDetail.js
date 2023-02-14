import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cartActions } from '../store/cartSlice'
import "./ProductDetail.css"



const ProductDetail = () => {
    const[detail,setDetail] = useState({})
    const {id} = useParams()
    const dispatch = useDispatch()
    

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setDetail(res.data))
    },[id])
    const addToCart = () => {
        dispatch(cartActions.addToCart({
            title:detail.title,
            price:detail.price,
            id:detail.id

        }))
    }
   
   
  return (
    <div className='product-detail'>
        <div className="left-section">
        <h3>Name : {detail.title}</h3>
        <p>Price : ${detail.price}</p>
        <p>Category : {detail.category}</p>
        <p>Description : {detail.description}</p>
        <button onClick={addToCart}>Add to Cart</button>
        </div>
        <div className="right-section">
            <img src={detail.image} alt="productImg" width={200} />
        </div>
        
        
    </div>
  )
}

export default ProductDetail
