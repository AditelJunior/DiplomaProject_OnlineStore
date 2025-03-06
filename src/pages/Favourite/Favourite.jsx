import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import "./styles.scss"


const Favourite = () => {
    const favouritesList = useSelector(state => state.favourites.favouriteProducts);
    return (
        <div className="container">
            <h1 className="pageTitle">Oblíbené</h1>
            <ProductList products={favouritesList}/>
        </div>
    )
}

export default Favourite;