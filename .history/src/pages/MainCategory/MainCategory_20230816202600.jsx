import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect, useNavigate } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";
import ProductsLimited from "../../components/ProductsLimited/ProductsLimited";

const MainCategory = () => {
  const products = useSelector((state) => state.shopping.products);
  const productsLoaded = useSelector((state) => state.shopping.isLoaded);
  const { mainCategory } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // productsLoaded ? handleProductList(mainCategory, categoryId) : console.log('still loading')
    if (productsLoaded) {
      handleProductList(mainCategory);
    }
  }, [productsLoaded, category, mainCategory]);

  const handleProductList = (mainCategory) => {
    let category;
    if (mainCategory === "weapons") {
      category = products.weapons;
    } else if (mainCategory === "protection") {
      category = products.protection;
    } else if (mainCategory === "knifes") {
      category = products.knifes;
    } else {
      console.log("ERROR ERROR ERROR ERROR");
    }
    setCategory(category);
  };
  return (
    <div className="container">
      <h1 className="pageTitle">{mainCategory}</h1>
      {productsLoaded && category ? (
        category.map((categoryItem, i) => {
          if (categoryItem) {
            return (
              <ProductsLimited
                category={categoryItem}
                mainCategory={mainCategory}
                key={categoryItem.id}
                limit={4}
              />
            );
          }
        })
      ) : (
        <b>Loading...</b>
      )}
    </div>
  );
};

export default MainCategory;
