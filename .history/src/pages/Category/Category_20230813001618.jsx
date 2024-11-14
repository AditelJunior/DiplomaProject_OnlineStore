import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./styles.scss"

import ProductList from "../../components/ProductList/ProductList";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
    const products = useSelector(state => state.shopping.products)
    const productsLoaded = useSelector(state => state.shopping.isLoaded)
    const { mainCategory, categoryId } = useParams();
    const [ category, setCategory] = useState({});

	useEffect(() => {
        console.log(mainCategory)
        console.log(categoryId)
        // productsLoaded ? handleProductList(mainCategory, categoryId) : console.log('still loading')
        if (productsLoaded) {
            handleProductList(mainCategory, categoryId)
        } else {
            console.log('still loading')
        }
        console.log(category)
	}, [ category, mainCategory, categoryId ]);

    const handleProductList = (mainCategory, categoryId) => {
        let category;
        if (mainCategory === 'weapons') {
            category = products.weapons.find((category)=> category.id === categoryId);
        } else if (mainCategory === 'protection'){
            category = products.protection.find((category)=> category.id === categoryId);
        } else if (mainCategory === 'knifes'){
            category = products.knifes.find((category)=> category.id === categoryId);
        } else {
            console.log('ERROR ERROR ERROR ERROR')
        }
        setCategory(category);
        // params: {productId: item.id}
    }
    return (
        <div className="container">
            <h1 className="pageTitle">{mainCategory}</h1>
            {
                category && category.products
                ?
                <ProductList category={category.products} categoryTitle={category.title} categoryId={category.id} mainCategory={mainCategory} productsPerPage={4} key={category.id}/>
                :
                <b>Loading...</b>
            }
        </div>
        
    )
    
}

export default Category;