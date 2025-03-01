import React from "react";
import "./styles.scss";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { SUB_CATEGORIES_TRANSLATION } from "./../../translations/translations";

const ProductsLimited = (props) => {
  const category = props.category;
  const mainCategory = props.mainCategory;

  let productList = [];
  for (let i = 0; i < props.category.products.length; i++) {
    const product = category.products[i];
    if (product) {
      productList.push(
        <ProductCard
          key={i}
          item={product}
          mainCategory={mainCategory}
          categoryId={category.id}
        />
      );
    }
  };
  return (
    <div className="limited_category_container">
      <h2 className="categoryHeader">{SUB_CATEGORIES_TRANSLATION[category.id]}</h2>
      <ul className="productList">{productList}</ul>
      <Link
        to={"/" + mainCategory + "/" + category.id}
        className="load_more btn btn-outline-primary">
        Zobrazit více
      </Link>
    </div>
  );
};
export default ProductsLimited;
