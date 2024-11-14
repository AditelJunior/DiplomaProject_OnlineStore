import React, { useState, useEffect, createElement }from "react";
import { useLocation } from "react-router-dom";
import "./styles.scss"
import ProductCard from "../ProductCard/ProductCard";

const ProductList = (props) => {
    const [productsToRender, setProducts] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [category, setCategory] = useState([]);
    const [isLoaded, setLoaded] = useState([]);
    const [pagesQuantity, setPagesQuantity] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
    
    const productsPerPage = props.productsPerPage;
    console.log("Product List initiated")
    console.log(props.categoryId)
    console.log(props.mainCategory)
    useEffect(()=>{
        setCategory(props.category)
        if (startIndex === 0) {
            setPrevButtonDisabled(true);
        } else {
            setPrevButtonDisabled(false);
        }
        if (currentPage+1 === pagesQuantity) {
            setNextButtonDisabled(true);
        } else {
            setNextButtonDisabled(false);
        }
        countPages();
        productsPagination();
    },[category, startIndex, productsToRender, currentPage, pagesQuantity])
    
    const countPages = () => {
        let lengthOfArray = category.length;
        const result = lengthOfArray/productsPerPage
        if (Number.isInteger(result)) {
            setPagesQuantity(result)
        } else {
            setPagesQuantity((result|0)+1)
        }
    }

    const productsPagination = () => {
        let products = [];
        setStartIndex(currentPage*productsPerPage);

        for (let i = startIndex; i < productsPerPage+startIndex; i++) {
            const product = category[i];
            if (product) {
                products.push(product)
            }
        }
        if (!isLoaded) {
            setProducts(products)
            setLoaded(true) 
        }
    }

    const nextPage = () => {
        if(currentPage<pagesQuantity) {
            setCurrentPage(currentPage+1)
        }
    }
    const prevPage = () => {
        if(currentPage>0) {
            setCurrentPage(currentPage-1)
        }
    }
    const thumbClick = (index) => {
        setCurrentPage(index)
    }

    const Thumbs = () => {
        let paginationList = []
        for (let i = 0; i < pagesQuantity; i++) {
            paginationList.push(
                <li key={i}>
                    <button
                        onClick={()=>thumbClick(i)}
                        className={currentPage === i ? "active" : ''} 
                        disabled={currentPage === i ? true : false}>
                        {i+1}
                    </button>
                </li>
            )
        }
        return(paginationList)
    }

    return (
        <div>
            <div className="category">
                <h2 className="categoryHeader">{props.categoryTitle}</h2>
                <ul className="productList">
                {
                    productsToRender.map((product,i)=>{
                        return (
                            <ProductCard key={product.title+product.price} item={product} mainCategory={props.mainCategory} categoryId={props.categoryId} number={i}/>
                        )
                    })
                }
                </ul>
                <div className="d-flex justify-content-center">
                    <div className="pagination_container">
                        <button onClick={(e)=>prevPage(e.target)} id="prev_button" disabled={prevButtonDisabled}>Prev</button>
                        <ul className="product_list_pagination">
                            <Thumbs/>
                        </ul>
                        <button onClick={(e)=>nextPage(e.target)} id="next_button" disabled={nextButtonDisabled}>Next</button>
                    </div>
                </div>
            </div>    
        </div>
    )
    
}

export default ProductList;
