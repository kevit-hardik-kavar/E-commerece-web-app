import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import Product from "./Product";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import InfiniteScroll from "react-infinite-scroll-component";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  // const [limit, setLimit] = useState(15)
  const [spinner, setSpinner] = useState(true)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
      setFilteredProduct(res.data);
      setTimeout(() => {
        setSpinner(false)
      }, 1200)
    });
  },[]);
//   const handleScroll = async () => {
//       // console.log("scrollHeight",document.documentElement.scrollHeight);
//       // console.log("innerHeight",window.innerHeight);
//       // console.log("scrollTop" ,document.documentElement.scrollTop);
    
//         if(document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight ){
//             setLimit(prev => prev+5)
//   }
// }
//   useEffect(()=> {
//     window.addEventListener("scroll",handleScroll)
//   },[]) 
  const filterProduct = (filterType) => {
    console.log(filterType);
    setFilteredProduct(products.filter((e) => e.category === filterType));
  };
 
  return (
    <div className="product-view">
      <div className="category">
        <h2>Filters</h2>
        <button onClick={() => { setFilteredProduct(products) }}>All Products</button>
        <button onClick={() => { filterProduct("men's clothing")}}>Men's Clothng </button>
        <button onClick={() => { filterProduct("women's clothing") }}>Women's Clothng</button>
        <button onClick={() => { filterProduct("jewelery") }}> Jewelery</button>
        <button onClick={() => { filterProduct("electronics")}}>Electronics </button>
      </div>
      {spinner ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open>
        <CircularProgress color="inherit" />
      </Backdrop> :
      <div className="card-items">
            {filteredProduct.map((product) => {
              return (<Product key={product.id}
                title={product.title}
                id={product.id}
                imgUrl={product.image}
                price={product.price} />)
            })}
        
          </div>}
       
    </div>);
};

export default ProductList;
