import React from "react";
import "./styles.scss";
import ProductCard from "../ProductCard/ProductCard";
import NoProducts from "../NoProducts/NoProducts";

const ProductList = (props) => {
  return (
    <div>
      <div className="category">
        {props.categoryTitle ? <h2 className="categoryHeader">{props.categoryTitle}</h2> : null}
        <ul className="productList">
          {
             props.products.map((product, i) => {
              return (
                <ProductCard
                  key={product.title + i}
                  item={product}
                  mainCategory={props.mainCategory}
                  categoryId={props.categoryId}
                  number={i}
                />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
