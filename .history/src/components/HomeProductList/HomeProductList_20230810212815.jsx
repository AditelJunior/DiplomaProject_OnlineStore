import React from "react";
import "./styles.scss"
import ProductsLimited from "../ProductsLimited/ProductsLimited";

const HomeProductList = (props) => {
    return (
        <div>
            {
                props.products.weapons.map((category, i) => {
                    return (
                        <ProductsLimited category={category} mainCategory="weapons" key={i} limit={4}/>
                    )
                })
            }
            {
                props.products.protection.map((category, i) => {
                    return (
                        <ProductsLimited category={category} mainCategory="protection" key={i} limit={4}/>
                    )
                })
            }
        </div>
    )
    
}

export default HomeProductList;
