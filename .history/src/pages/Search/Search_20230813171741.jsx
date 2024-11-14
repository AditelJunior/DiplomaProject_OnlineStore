import React from "react";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductList from "../../components/ProductList/ProductList";
import "./styles.scss"

const Search = () => {
    const products = useSelector(state => state.shopping.products)
    const productsLoaded = useSelector(state => state.shopping.isLoaded)

    const [isLoaded, setLoaded] = useState(false)

    const { searchQuery } = useParams();
    const [ searchResults, setSearchResults] = useState([]);
    const [ searchQueryState, setSearchQueryState] = useState('');

	useEffect(() => {
        console.log('SEARCH PAGE')
        console.log(searchQuery)
        setSearchQueryState(searchQuery.toLowerCase())
        // productsLoaded ? handleProductList(mainCategory, categoryId) : console.log('still loading')
        if (productsLoaded) {
            handleProductList()

        } else {
            console.log('still loading')
        }
	}, [ products, searchQuery, isLoaded, searchResults ]);

    const handleProductList = () => {
        let results = [];
        
        console.log(products);
        for (let i = 0; i < products.weapons.length; i++) {
            const subCategory = products.weapons[i];
            for (let j = 0; j < subCategory.products.length; j++) {
                const product = subCategory.products[j];
                if (product.title.toLowerCase().indexOf(searchQueryState) >= 0 ) {
                    results.push(product)
                }
            }
        }
        if (isLoaded) {
            setSearchResults(results)
        console.log(searchResults)
        setLoaded(true)
        console.log(isLoaded)
        }
        
    }
    return (
        <div className="container">
            <h1 className="pageTitle">
                Результаты поиска
            </h1>
                {
                    searchResults.map((result, i) => {
                        <p>{i}</p>
                    })
                }
            <div>
                
            {/* {
                products
                ?
                <ProductList 
                    category={searchResults} 
                    categoryTitle={'weapons'} 
                    categoryId={"rifles"} 
                    mainCategory={"weapons"} 
                    productsPerPage={4}/>
                :
                <b>Loading...</b>
            } */}
            </div>
        </div>
    )
}

export default Search;