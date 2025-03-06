import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
//common styles
import './styles/commonStyles.scss';
//components
import Navigation from "./components/Navbar/Navbar";
import CompareWidget from "./components/CompareWidget/CompareWidget";
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
import Comparison from "./pages/Comparison/Comparison";
import Favourite from "./pages/Favourite/Favourite";
import Payment from "./pages/Payment/Payment";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navigation/>
        <CompareWidget/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/comparison" element={<Comparison/>} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/:mainCategory/:categoryId/' element={<Category />} />
          <Route path='/:mainCategory/' element={<MainCategory />} />
          <Route path='/search/' element={<Search />} />
          <Route path='/favourite/' element={<Favourite />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
