import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cartActions } from '../store/cartSlice'
import "./ProductDetail.css"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



const ProductDetail = () => {
    const [loader, setLoader] = useState(true)
    const [detail, setDetail] = useState({})
    const { id } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setDetail(res.data))
        setTimeout(() => {
            setLoader(false)
        }, 1200)
    }, [id, loader])
    const addToCart = () => {
        dispatch(cartActions.addToCart({
            title: detail.title,
            price: detail.price,
            id: detail.id

        }))
    }


    return (
        <>

            {loader ? <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open>
                <CircularProgress color="inherit" />
            </Backdrop> : <div className='product-detail' >
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
            </div >}


        </>
    )
}

export default ProductDetail
