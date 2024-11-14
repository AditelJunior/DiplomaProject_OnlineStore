import React from "react";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductList from "../../components/ProductList/ProductList";
import "./styles.scss"

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
        let results = [];

        setSearchQueryState(searchQuery)
        console.log(searchQuery)
        for (const key in products) {
            const category = products[key];
            let resultCategory = {
                products: [],
                categoryId: '',
                mainCategory: key
            };
            for (let i = 0; i < category.length; i++) {
                const subCategory = category[i];
                for (let j = 0; j < subCategory.products.length; j++) {
                    const product = subCategory.products[j];
                    if (product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ) {
                        results.push(product)
                    }
                }
            }
            console.log(`${key} = ${products[key]}`);

          }
        for (let i = 0; i < products.weapons.length; i++) {
            const subCategory = products.weapons[i];
            for (let j = 0; j < subCategory.products.length; j++) {
                const product = subCategory.products[j];
                if (product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ) {
                    results.push(product)
                }
            }
        }
        // if (!isLoaded) {
            setSearchResults(results)
            setLoaded(true)
        // }
        
    }
    return (
        <div className="container">
            <h1 className="pageTitle">
                Результаты поиска
            </h1>
            <div>
            {
                searchResults.length>0&&isLoaded
                ?
                <ProductList 
                    category={searchResults} 
                    categoryTitle={'weapons'}
                    categoryId={'rifles'} 
                    mainCategory={'weapons'} 
                    productsPerPage={4}/>
                :
                <b>Loading...</b>
            }
            </div>
        </div>
    )
}

export default Search;