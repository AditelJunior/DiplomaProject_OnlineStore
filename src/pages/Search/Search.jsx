import React from "react";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { collection, getDocs, where, query } from "firebase/firestore";
import db from "../../firebase";

import ProductList from "../../components/ProductList/ProductList";
import "./styles.scss";

const Search = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [isLoaded, setLoaded] = useState([false]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    handleProductSearch(searchParams.get('query'));
  }, [searchParams]);

  const handleProductSearch = async (searchQuery) => {
    let searchQueryArray = searchQuery.toLowerCase().trim().split(' ');

    const productSearch_ref = collection(db, 'products');
    const productSearch_query = query(productSearch_ref, where('searchQueries','array-contains-any', searchQueryArray));

    const doc_refs = await getDocs(productSearch_query).catch(error => {console.log(error)});

    let searchResult;
    searchResult = doc_refs.docs.map((doc) => {
      return {id: doc.id, ...doc.data()};
    });

    setLoaded(true);
    setSearchResults(searchResult);

  };
  const NoResults = () => {
    return (
      <h2>Нет результатов</h2>
    )
  }
  return (
    <div className="container">
      <h1 className="pageTitle">Результаты поиска</h1>
      {isLoaded ? ( searchResults.length ? <ProductList products={searchResults}/> :  <NoResults/>) : <span>Loading</span> }
      
    </div>
  );
};

export default Search;
