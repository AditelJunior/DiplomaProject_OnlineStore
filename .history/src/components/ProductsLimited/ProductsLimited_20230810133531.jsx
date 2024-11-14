import React from "react";
import "./styles.scss"
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductsLimited = (props) => {
    const category = props.category
    const mainCategory = props.mainCategory
    let productList = [];
    for (let i = 0; i < props.limit; i++) {
        const product = category.products[i];
        if (product) {
            productList.push(<ProductCard key={i} item={product} mainCategory={mainCategory} categoryId={category.id} number={i}/>)
            
        }
    }
    return (
        <div className="category">
            <h2 className="categoryHeader">{category.id}</h2>
            <ul className="productList">
                {productList}
            </ul>
            <Link
                to={"/"+mainCategory+"/"+category.id}
                className="load_more btn btn-outline-primary">Загрузить больше</Link>
        </div>
    )
}
export default ProductsLimited;