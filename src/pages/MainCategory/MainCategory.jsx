import React from "react";
// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.scss";
import ProductList from "../../components/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import Loader from "../../components/Loader/Loader";
import NoProducts from "../../components/NoProducts/NoProducts";

import { collection, getDocs, where, limit, query, orderBy, limitToLast, endBefore, startAfter, } from "firebase/firestore";

import db from "../../firebase";

import { CATEGORIES_TRANSLATION } from "../../translations/translations";

const MainCategory = () => {
  const { mainCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [lastVisible, setLastVisible] = useState();
  const [firstVisible, setFirstVisible] = useState();
  const [filterSetting, setFilterSetting] = useState({filter:'updated_at',order: 'desc'})

  const navigate = useNavigate();

  const categoryLevel = 'category';
  const pageSize = 24;
  const collection_ref = collection(db, 'products');

  useEffect(() => {
    // check if this page exists, XD easy solution
    if (CATEGORIES_TRANSLATION[mainCategory]) {
      getProducts('default');
    } else {
      navigate('/404')
    }
  }, [mainCategory, filterSetting]);

  const handleFilterState = (object) => {
    setFilterSetting(object)
  }

  const getProducts = async (direction) => {
    setLoaded(false)
    let newArr = [];
    let q; 

    if (direction === 'next') {
      q = query(collection_ref, limit(pageSize), where(categoryLevel, "==", mainCategory), orderBy("available", "desc"), orderBy(filterSetting.filter, filterSetting.order), startAfter(lastVisible))
    } else if (direction === "prev") {
      q = query(collection_ref, limitToLast(pageSize), where(categoryLevel, "==", mainCategory), orderBy("available", "desc"), orderBy(filterSetting.filter, filterSetting.order), endBefore(firstVisible))
    } else if (direction === 'default') {
      q = query(collection_ref, where(categoryLevel, "==", mainCategory), orderBy("available", "desc"), orderBy(filterSetting.filter, filterSetting.order), limit(pageSize));
    }

    const doc_refs = await getDocs(q).catch(error => {console.log(error)});

    newArr = doc_refs.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    });
    if (doc_refs.docs) {
      setLastVisible(doc_refs.docs[doc_refs.docs.length-1]);
      setFirstVisible(doc_refs.docs[0]);
    }
    setProducts(newArr);
    setLoaded(true);
  }

  
  return (
    <div className="container">
      <h1 className="pageTitle">{CATEGORIES_TRANSLATION[mainCategory] ? CATEGORIES_TRANSLATION[mainCategory] : mainCategory}</h1>

      <Filters handleFilterState={handleFilterState}/>
      { isLoaded ? (
        products.length ?
          <ProductList
            products={products}
          />
        : <NoProducts/>
      ) : (
        <Loader/>
      )}
        <Pagination category={mainCategory} categoryLevel={categoryLevel} reload={filterSetting} setter={getProducts} pageSize={pageSize}/>
    </div>
  );
};

export default MainCategory;
