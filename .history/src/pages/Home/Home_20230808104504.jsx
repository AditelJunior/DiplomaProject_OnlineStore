import React, { useEffect, useState } from "react";
// import PRODUCTS from "../../products/products"
import { useDispatch, useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';
import { createProducts } from "../../actions/productsActions";
import ProductCard from "../../components/ProductCard/ProductCard";
import HomeProductList from "../../components/HomeProductList/HomeProductList";
import ShopImg1 from "../../assets/images/shop_img1.jpg";
import "./styles.scss"
// import { getStorage, ref } from "firebase/storage";



const CategoryPage = () => {
    // const storage = getStorage();

    const products = useSelector(state => state.shopping.products)
    const isLoaded = useSelector(state => state.shopping.isLoaded)
   
    return (
        <div>
            <div className="container">
                <h1 className="pageTitle">
                    Наш ассортимент
                </h1>
                {isLoaded
                    ? <HomeProductList products={products}/>
                    : <b>Loading...</b>
                }
            </div>
        </div>
    )
}

export default CategoryPage;