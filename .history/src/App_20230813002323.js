// import logo from './logo.svg'; 
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { createProducts } from "./actions/productsActions";
// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

//common styles
import './styles/commonStyles.scss'

//components
import Navigation from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Category from "./pages/Category/Category";
import NotFound from "./pages/NotFound/NotFound";
import MainCategory from "./pages/MainCategory/MainCategory";
import Search from "./pages/Search/Search";
import Firearms from "./pages/Firearms/Firearms";

import { onSnapshot, collection, getDocs, doc, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import db from "./firebase";
import firebase from 'firebase/app';

function App() {
  const storage = getStorage();

    const dispatch = useDispatch();
    const productsLoaded = useSelector(state => state.shopping.isLoaded)
    const url = "https://arsenal-center-default-rtdb.europe-west1.firebasedatabase.app/products.json";

    useEffect(() => {
      getProducts();
    }, [])
    function getProducts() {
      let products = {}
      getDocs(collection(db, 'weapons'))
        .then(response => {
          products.weapons = response.docs.map(doc => 
            ({
              title: doc.data().title,
              products: doc.data().products,
              id: doc.id
            })
          )
          // dispatch(createProducts(products, true))
        })
        .catch(error => console.log(error.message))

        getDocs(collection(db, 'protection'))
        .then(response => {
          products.protection = response.docs.map(doc => 
            ({
              title: doc.data().title,
              products: doc.data().products,
              id: doc.id
            })
          )
          // dispatch(createProducts(products, true))
        })
        .catch(error => console.log(error.message))

        getDocs(collection(db, 'knifes'))
        .then(response => {
          products.knifes = response.docs.map(doc => 
            ({
              title: doc.data().title,
              products: doc.data().products,
              id: doc.id
            })
          )
          dispatch(createProducts(products, true))
        })
        .catch(error => console.log(error.message))
    }
    
  return (
    <div className="App">
      <Router>
      <ScrollToTop/>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/:mainCategory/:categoryId/:number' element={<Product/>}/>
            <Route path='/:mainCategory/:categoryId/' element={<Category/>}/>
            <Route path='/:mainCategory/' element={<MainCategory/>}/>
            <Route path='search/:searchQuery' element={<Search/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
