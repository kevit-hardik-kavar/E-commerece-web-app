import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import Product from "./Product";
// import ShowProduct from "./ShowProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setFilteredProduct(res.data);
    });
  }, []);
  const filterProduct = (filterType) => {
    setFilteredProduct(products.filter((e) => e.category === filterType));
  };

  return (
    <div>
      <div className="category">
        <h2>Category</h2>
        <button onClick={() => { setFilteredProduct(products) }}>All Products</button>
        <button onClick={() => { filterProduct("men's clothing"); }}>Men's Clothng </button>
        <button onClick={() => { filterProduct("women's clothing"); }}>Women's Clothng</button>
        <button onClick={() => { filterProduct("jewelery"); }}> Jewelery</button>
        <button onClick={() => { filterProduct("electronics"); }}>Electronics </button>

      </div>
      <div className="card-items">
        {filteredProduct.map((product) => {
          return (<Product
            title={product.title}
            id={product.id}
            imgUrl={product.image}
            price={product.price} />)
        })}
        
      </div>
    </div>);
};

export default ProductList;
