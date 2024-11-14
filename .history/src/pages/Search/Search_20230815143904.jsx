import React from "react";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductList from "../../components/ProductList/ProductList";
import "./styles.scss"
import ProductCard from "../../components/ProductCard/ProductCard";

const Search = () => {
    const products = useSelector(state => state.shopping.products)
    const productsLoaded = useSelector(state => state.shopping.isLoaded)

    const { searchQuery } = useParams();

    const [ searchResults, setSearchResults] = useState([]);
    const [ isLoaded, setLoaded] = useState([]);
    const [ searchQueryState, setSearchQueryState] = useState();

	useEffect(() => {
        console.log('SEARCH PAGE')
        // productsLoaded ? handleProductList(mainCategory, categoryId) : console.log('still loading')
        if (productsLoaded && isLoaded==false) {
            handleProductList()
        } else {
            console.log('still loading')
        }
	}, [ productsLoaded, searchResults, isLoaded ]);

    const handleProductList = () => {
        setSearchQueryState(searchQuery)
        console.log(searchQuery)
        let results = [];
        for (const key in products) {
            const category = products[key];
            let categoryResults = [];
            for (let i = 0; i < category.length; i++) {
                let resultCategory = {
                    products: [],
                    id: '',
                    mainCategory: key,
                };
                const subCategory = category[i];
                let subCategoryProducts = [];
                resultCategory.id = subCategory.id;
                for (let j = 0; j < subCategory.products.length; j++) {
                    const product = subCategory.products[j];
                    if (product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
                        || product.manufacturer.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0) {
                        product.id = j;
                        subCategoryProducts.push(product)
                    }
                }
                resultCategory.products = subCategoryProducts;
                console.log(resultCategory)
                results.push(resultCategory)
            }
            console.log(categoryResults);
        }
        console.log(results);
        setSearchResults(results)
        setLoaded(true)
        console.log(searchResults);

    }
    return (
        <div className="container">
            <h1 className="pageTitle">
                Результаты поиска
            </h1>
            <ul className="productList">
                {
                    searchResults.map((result, i)=> {
                        return result.products.map((product,i)=> {
                            return <ProductCard 
                                    key={product.title+product.price} 
                                    item={product} 
                                    mainCategory={result.mainCategory} 
                                    categoryId={result.id} 
                                    number={product.id}/>  
                        })
                    })
                }
            </ul>
        </div>
    )
}

export default Search;