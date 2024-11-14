import React from "react";
import "./styles.scss";
import ProductsLimited from "../ProductsLimited/ProductsLimited";

const HomeProductList = (props) => {

  return (
    <div>
      {props.products.map((category, i) => {
        return (
          <ProductsLimited
            category={category}
            mainCategory="weapons"
            key={i}
          />
        );
      })}
    </div>
  );
};

export default HomeProductList;
