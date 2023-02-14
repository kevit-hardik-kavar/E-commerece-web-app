import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import Product from "./Product";

const PAGE_NUMBER = 1;
const ProductList = () => {
  
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [page , setPage] = useState(PAGE_NUMBER)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setFilteredProduct(res.data);
    });
  }, [page]);
  const filterProduct = (filterType) => {
    setFilteredProduct(products.filter((e) => e.category === filterType));
  };
  const scrollToEnd = () => {
    setPage(page + 1)
  }
  window.onscroll = function () {
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      scrollToEnd()
    }
  }
 

  return (
    <div className="product-view">
      <div className="category">
        <h2>Filters</h2>
        <button onClick={() => { setFilteredProduct(products) }}>All Products</button>
        <button onClick={() => { filterProduct("men's clothing"); }}>Men's Clothng </button>
        <button onClick={() => { filterProduct("women's clothing"); }}>Women's Clothng</button>
        <button onClick={() => { filterProduct("jewelery"); }}> Jewelery</button>
        <button onClick={() => { filterProduct("electronics"); }}>Electronics </button>
      </div>
      <div className="card-items">
        {filteredProduct.map((product) => {
          return (<Product key={product.id}
            title={product.title}
            id={product.id}
            imgUrl={product.image}
            price={product.price} />)
        })}
        {filteredProduct.map((product) => {
          return (<Product key={product.id}
            title={product.title}
            id={product.id}
            imgUrl={product.image}
            price={product.price} />)
        })}
        {filteredProduct.map((product) => {
          return (<Product key={product.id}
            title={product.title}
            id={product.id}
            imgUrl={product.image}
            price={product.price} />)
        })}
      </div>
    </div>);
};

export default ProductList;
